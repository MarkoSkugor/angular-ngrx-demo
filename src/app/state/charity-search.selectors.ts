import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharitySearchState } from './charity-search-state.interface';
 
export const selectCharitySearchState = createFeatureSelector<CharitySearchState>('charity');
 
export const selectCharitySearchTerm = createSelector(
  selectCharitySearchState,
  (state: CharitySearchState) => state.searchTerm,
);

export const selectCharitySearchIsLoading = createSelector(
  selectCharitySearchState,
  (state: CharitySearchState) => state.isLoading,
);

export const selectCharitySearchResults = createSelector(
  selectCharitySearchState,
  (state: CharitySearchState) => state.searchResults,
);

export const selectCharitySearchError = createSelector(
  selectCharitySearchState,
  (state: CharitySearchState) => state.searchError,
);
