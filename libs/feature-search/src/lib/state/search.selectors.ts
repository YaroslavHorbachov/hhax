import { createFeatureSelector, createSelector } from '@ngrx/store';
import { searchAdapter, SEARCH_FEATURE_KEY, State } from './search.reducer';

const selectors = searchAdapter.getSelectors();

export const selectState = createFeatureSelector<State>(SEARCH_FEATURE_KEY);

export const selectIsLoading = createSelector(selectState, (state: State) => state.isLoading);

export const selectAllRecords = createSelector(selectState, (state: State) => selectors.selectAll(state));

const selectSearchEntities = createSelector(selectState, (state: State) => selectors.selectEntities(state));

export const selectSelectedId = createSelector(selectState, (state: State) => state.selectedId);

export const selectSelectedRecord = createSelector(selectSearchEntities, selectSelectedId, (entities, selectedId) => {
  return selectedId ? entities[selectedId] : null;
});

export const selectTotal = createSelector(selectState, selectors.selectTotal);
