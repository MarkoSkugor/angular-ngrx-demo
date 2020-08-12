import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as charitySearchActions from './charity-search.actions';
import * as charitySearchSelectors from './charity-search.selectors';

@Injectable()
export class CharitySearchStateService {
  constructor(private store: Store<any>) {}

  searchTerm$: Observable<string> = this.store.select(charitySearchSelectors.selectCharitySearchTerm);
  searchResults$: Observable<any[]> = this.store.select(charitySearchSelectors.selectCharitySearchResults);
  searchError$: Observable<any> = this.store.select(charitySearchSelectors.selectCharitySearchError);
  isLoading$: Observable<boolean> = this.store.select(charitySearchSelectors.selectCharitySearchIsLoading);

  searchCharities(searchTerm: string) {
    this.store.dispatch(charitySearchActions.searchCharities({ searchTerm }));
  }
}