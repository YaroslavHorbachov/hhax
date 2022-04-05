import { InjectionToken } from '@angular/core';
import { Env } from '../interfaces/env.interface';

export const ENV_TOKEN = new InjectionToken<Env>('ENV_TOKEN');
