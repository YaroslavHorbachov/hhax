import { AgifyRecord } from '@hhax/data-access-api';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as SearchActions from './search.actions';

export const SEARCH_FEATURE_KEY = 'search';

export interface State extends EntityState<AgifyRecord> {
  readonly selectedId: number | null; // which Search record has been selected
  readonly isLoading: boolean; // has the Search list been loaded
  readonly error: string | null; // last known error (if any)
}

export interface SearchPartialState {
  readonly [SEARCH_FEATURE_KEY]: State;
}

export const searchAdapter: EntityAdapter<AgifyRecord> = createEntityAdapter<AgifyRecord>();

export const initialState: State = searchAdapter.getInitialState({
  error: null,
  selectedId: null,
  isLoading: false,
});

const searchReducer = createReducer(
  initialState,

  on(SearchActions.load, (state): State => ({ ...state, isLoading: true, error: null })),
  on(SearchActions.loadSuccess, (state, { data }): State => searchAdapter.addOne(data, { ...state, isLoading: false })),
  on(SearchActions.loadFailure, (state, { error }): State => ({ ...state, error, isLoading: false })),

  on(SearchActions.select, (state, { id }): State => ({ ...state, selectedId: id }))
);

export function reducer(state: State, action: Action): State {
  return searchReducer(state, action);
}
