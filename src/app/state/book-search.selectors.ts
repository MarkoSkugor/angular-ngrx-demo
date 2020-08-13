import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookSearchState } from './book-search-state.interface';
 
export const selectBookSearchState = createFeatureSelector<BookSearchState>('bookSearch');
 
export const selectBookSearchTerm = createSelector(
  selectBookSearchState,
  (state: BookSearchState) => state.searchTerm,
);

export const selectBookSearchIsLoading = createSelector(
  selectBookSearchState,
  (state: BookSearchState) => state.isLoading,
);

export const selectBookSearchResults = createSelector(
  selectBookSearchState,
  (state: BookSearchState) => state.searchResults,
);

export const selectBookSearchError = createSelector(
  selectBookSearchState,
  (state: BookSearchState) => state.searchError,
);
