import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as bookSearchActions from './book-search.actions';
import * as bookSearchSelectors from './book-search.selectors';

@Injectable()
export class BookSearchStateService {
  constructor(private store: Store<any>) {}

  searchTerm$: Observable<string> = this.store.select(bookSearchSelectors.selectBookSearchTerm);
  searchResults$: Observable<any> = this.store.select(bookSearchSelectors.selectBookSearchResults);
  searchError$: Observable<any> = this.store.select(bookSearchSelectors.selectBookSearchError);
  isLoading$: Observable<boolean> = this.store.select(bookSearchSelectors.selectBookSearchIsLoading);

  searchCharities(searchTerm: string) {
    this.store.dispatch(bookSearchActions.searchCharities({ searchTerm }));
  }
}