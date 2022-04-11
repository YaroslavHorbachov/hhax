import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SearchActions from './search.actions';
import * as SearchSelectors from './search.selectors';

@Injectable()
export class SearchFacade {
  constructor(private readonly store: Store) {}

  public readonly isLoading$ = this.store.select(SearchSelectors.selectIsLoading);

  public readonly allRecords$ = this.store.select(SearchSelectors.selectAllRecords);

  public readonly selectedRecord$ = this.store.select(SearchSelectors.selectSelectedRecord);

  public load(name: string): void {
    this.store.dispatch(SearchActions.load({ name }));
  }

  public select(id: number): void {
    this.store.dispatch(SearchActions.select({ id }));
  }
}
