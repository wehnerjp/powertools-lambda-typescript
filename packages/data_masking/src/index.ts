/* eslint-disable @typescript-eslint/ban-types */
export * from './errors';
export * from './constants';
import { BaseProvider } from './base/BaseProvider';

export class DataMasking {
  public provider: BaseProvider;

  public constructor(provider?: BaseProvider | null) {
    this.provider = provider || new BaseProvider();
  }

  //   public async decrypt(
  //     data: unknown,
  //     fields: Array<string> | null = null,
  //     providerOptions: Record<string, unknown> = {}
  //   ): Promise<unknown> {
  //     return this.applyAction(
  //       data,
  //       fields,
  //       this.provider.decrypt,
  //       providerOptions
  //     );
  //   }

  //   public async encrypt(
  //     data: unknown,
  //     fields: Array<string> | null = null,
  //     providerOptions: Record<string, unknown> = {}
  //   ): Promise<unknown> {
  //     return this.applyAction(
  //       data,
  //       fields,
  //       this.provider.encrypt,
  //       providerOptions
  //     );
  //   }

  //   public mask(
  //     data: unknown,
  //     fields: Array<string> | null = null,
  //     providerOptions: Record<string, unknown> = {}
  //   ): unknown {
  //     return this.applyAction(data, fields, this.provider.mask, providerOptions);
  //   }

  //   private applyAction(
  //     data: unknown,
  //     fields: Array<string> | null,
  //     action: Function,
  //     providerOptions: Record<string, unknown>
  //   ): unknown {
  //     if (fields) {
  //       return this.applyActionToFields(data, fields, action, providerOptions);
  //     } else {
  //       return action(data, providerOptions);
  //     }
  //   }

  //   private applyActionToDictionary(
  //     data: Record<string, unknown>,
  //     fields: Array<string>,
  //     action: Function,
  //     providerOptions: Record<string, unknown>
  //   ): unknown {
  //     for (const nestedKey of fields) {
  //       const keys = nestedKey.split('.');
  //       let currDict = data;

  //       for (const key of keys.slice(0, -1)) {
  //         currDict = currDict[key];
  //       }

  //       const valToChange = currDict[keys[keys.length - 1]];
  //       currDict[keys[keys.length - 1]] = action(valToChange, providerOptions);
  //     }

  //     return data;
  //   }

  //   private applyActionToFields(
  //     data: unknown,
  //     fields: Array<string>,
  //     action: Function,
  //     providerOptions: Record<string, unknown>
  //   ): unknown {
  //     if (!fields) {
  //       throw new Error('No fields specified.');
  //     }

  //     if (typeof data === 'string') {
  //       const myDictParsed = JSON.parse(data);

  //       return this.applyActionToDictionary(
  //         myDictParsed,
  //         fields,
  //         action,
  //         providerOptions
  //       );
  //     } else if (typeof data === 'object') {
  //       const myDictParsed = JSON.parse(JSON.stringify(data));

  //       return this.applyActionToDictionary(
  //         myDictParsed,
  //         fields,
  //         action,
  //         providerOptions
  //       );
  //     } else {
  //       throw new Error(
  //         `Unsupported data type for 'data' parameter. Expected a traversable type, but got ${typeof data}.`
  //       );
  //     }
  //   }
}

export default DataMasking;
