import { ValueProvider } from '@angular/core';
import { ENV } from '@hhax/util-env';

export const mockEnvProvider: ValueProvider = {
  provide: ENV,
  useValue: {},
};
