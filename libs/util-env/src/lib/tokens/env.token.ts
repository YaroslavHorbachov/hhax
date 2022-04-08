import { InjectionToken } from '@angular/core';
import { Env } from '../interfaces';

export const ENV = new InjectionToken<Env>('ENV');
