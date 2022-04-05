import { ValueProvider } from '@angular/core';
import { ENV_TOKEN } from '@hhax/util-env';

export const envMockProvider: ValueProvider = {
  provide: ENV_TOKEN,
  useValue: {},
};
