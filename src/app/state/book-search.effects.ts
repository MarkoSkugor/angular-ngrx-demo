import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BookSearchService } from './book-search.service';

import * as bookSearchActions from './book-search.actions';
 
@Injectable()
export class BookSearchEffects {
 
  search$ = createEffect(() => this.actions$.pipe(
    ofType(bookSearchActions.searchCharities),
    mergeMap(({ searchTerm }) => this.bookSearchService.search(searchTerm)
      .pipe(
        map((searchResults: any[]) => bookSearchActions.searchCharitiesSuccess({ searchResults })),
        catchError((searchError) => of(bookSearchActions.searchCharitiesError({ searchError })))
      ))
    )
  ); 
 
  constructor(
    private actions$: Actions,
    private bookSearchService: BookSearchService
  ) {}
}