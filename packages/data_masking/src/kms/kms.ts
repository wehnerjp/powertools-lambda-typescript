import {
  KmsKeyringNode,
  buildClient,
  CommitmentPolicy,
  NodeCachingMaterialsManager,
  getLocalCryptographicMaterialsCache,
} from '@aws-crypto/client-node';
import {
  CACHE_CAPACITY,
  MAX_CACHE_AGE_SECONDS,
  MAX_MESSAGES_ENCRYPTED,
} from '../constants';
import { Readable } from 'stream';
import { EncryptInput } from '@aws-crypto/encrypt-node/build/main/src/encrypt';
import { DecryptOptions } from '@aws-crypto/decrypt-node/build/main/src/decrypt';
import { EncryptionContext } from '@aws-crypto/material-management-node';
class AwsEncryptionSdkProvider {
  private _keyProvider: KMSKeyProvider;

  public constructor(
    generatorKeyId: string,
    keys: string[],
    localCacheCapacity: number = CACHE_CAPACITY,
    maxCacheAgeSeconds: number = MAX_CACHE_AGE_SECONDS,
    maxMessagesEncrypted: number = MAX_MESSAGES_ENCRYPTED
  ) {
    this._keyProvider = new KMSKeyProvider(
      generatorKeyId,
      keys,
      localCacheCapacity,
      maxCacheAgeSeconds,
      maxMessagesEncrypted
    );
  }

  public async decrypt(
    ciphertext: Buffer | Uint8Array | Readable | string | NodeJS.ReadableStream,
    providerOptions: DecryptOptions | undefined,
    expectedEncryptionContext?: EncryptionContext
  ): Promise<string> {
    return this._keyProvider.decrypt(
      ciphertext,
      providerOptions,
      expectedEncryptionContext
    );
  }

  public async encrypt(
    cleartext: string | Uint8Array | Buffer | Readable | NodeJS.ReadableStream,
    providerOptions: EncryptInput | undefined
  ): Promise<string> {
    return this._keyProvider.encrypt(cleartext, providerOptions);
  }
}

class KMSKeyProvider {
  private cache;
  private cacheCmm;
  private client;
  private keyProvider;
  public constructor(
    generatorKeyId: string,
    keys: string[],
    localCacheCapacity: number,
    maxCacheAgeSeconds: number,
    maxMessagesEncrypted: number
  ) {
    this.client = buildClient(CommitmentPolicy.REQUIRE_ENCRYPT_REQUIRE_DECRYPT);
    this.cache = getLocalCryptographicMaterialsCache(localCacheCapacity);
    this.keyProvider = new KmsKeyringNode({ generatorKeyId, keyIds: keys });
    this.cacheCmm = new NodeCachingMaterialsManager({
      cache: this.cache,
      backingMaterials: this.keyProvider,
      maxAge: maxCacheAgeSeconds,
      maxMessagesEncrypted,
    });
  }

  public async decrypt(
    ciphertext: Buffer | Uint8Array | Readable | string | NodeJS.ReadableStream,
    providerOptions: DecryptOptions | undefined,
    expectedEncryptionContext: EncryptionContext = {}
  ): Promise<string> {
    // const ciphertext2 = Buffer.from(ciphertext.toString(), 'base64');
    // const ciphertextDecoded = base64.toByteArray(ciphertext.toString());

    const { plaintext, messageHeader } = await this.client.decrypt(
      this.cacheCmm,
      ciphertext,
      {
        ...providerOptions,
      }
    );

    const { encryptionContext: decryptedContext } = messageHeader;

    for (const [key, value] of Object.entries(expectedEncryptionContext)) {
      if (decryptedContext[key] !== value) {
        throw new Error(
          `Encryption Context does not match expected value for key: ${key}`
        );
      }
    }

    const decryptedData = JSON.parse(plaintext.toString('base64'));

    return decryptedData;
  }

  public async encrypt(
    cleartext: string | Uint8Array | Buffer | Readable | NodeJS.ReadableStream,
    providerOptions: EncryptInput | undefined
  ): Promise<string> {
    const { result } = await this.client.encrypt(this.cacheCmm, cleartext, {
      ...providerOptions,
    });
    const ciphertextStr = result.toString('base64');

    return ciphertextStr;
  }
}

export default AwsEncryptionSdkProvider;
