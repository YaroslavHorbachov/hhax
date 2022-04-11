import { Injectable } from '@angular/core';
import { AgifyClientService } from '@hhax/data-access-api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';
import * as SearchActions from './search.actions';

@Injectable()
export class SearchEffects {
  constructor(private readonly actions$: Actions, private readonly agifyClientService: AgifyClientService) {}

  public readonly init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SearchActions.load),
      fetch({
        run: (action) => {
          return this.agifyClientService.load(action.name).pipe(map((data) => SearchActions.loadSuccess({ data })));
        },
        onError: (_, error) => {
          console.error('Error', error);

          return SearchActions.loadFailure({ error });
        },
      })
    );
  });
}
