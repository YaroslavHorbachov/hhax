import { AgifyRecord } from '@hhax/data-access-api';
import { createAction, props } from '@ngrx/store';

export const load = createAction('[Search] Load', props<{ name: string }>());

export const loadSuccess = createAction('[Search] Load Success', props<{ data: AgifyRecord }>());

export const loadFailure = createAction('[Search] Load Failure', props<{ error: string }>());

export const select = createAction('[Search] Select', props<{ id: number }>());
