/* eslint-disable @typescript-eslint/ban-types */
import { DATA_MASKING_STRING } from '../constants';

export class BaseProvider {
  public decrypt(_data: Uint8Array): unknown {
    throw new Error('Subclasses must implement decrypt()');
  }

  public encrypt(_data: unknown): string {
    throw new Error('Subclasses must implement encrypt()');
  }

  public mask(data: unknown): unknown {
    if (typeof data === 'string' || typeof data === 'object') {
      return DATA_MASKING_STRING;
    } else if (Array.isArray(data) || data instanceof Set) {
      return new Array((data as unknown[]).length).fill(DATA_MASKING_STRING);
    }

    return DATA_MASKING_STRING;
  }
}
