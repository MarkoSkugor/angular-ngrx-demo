import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CharitySearchService } from './charity-search.service';

import * as charitySearchActions from './charity-search.actions';
 
@Injectable()
export class CharitySearchEffects {
 
  search$ = createEffect(() => this.actions$.pipe(
    ofType(charitySearchActions.searchCharities),
    mergeMap(({ searchTerm }) => this.charitySearchService.search(searchTerm)
      .pipe(
        map((searchResults: any[]) => charitySearchActions.searchCharitiesSuccess({ searchResults })),
        catchError((searchError) => of(charitySearchActions.searchCharitiesError({ searchError })))
      ))
    )
  ); 
 
  constructor(
    private actions$: Actions,
    private charitySearchService: CharitySearchService
  ) {}
}