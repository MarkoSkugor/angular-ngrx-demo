import { createReducer, on } from '@ngrx/store';
import * as bookSearchActions from './book-search.actions';
import { tassign } from 'tassign';

import { BookSearchState } from './book-search-state.interface';
 
export const initialState: BookSearchState = {
  searchTerm: '',
  searchResults: undefined,
  searchError: undefined,
  isLoading: false,
};
 
const _bookSearchReducer = createReducer(initialState,
  on(bookSearchActions.searchCharities, (state, { searchTerm }) => tassign(
    state,
    {
      searchTerm,
      isLoading: true,
    }
  )),
  on(bookSearchActions.searchCharitiesSuccess, (state, { searchResults }) => tassign(
    state,
    {
      searchResults,
      isLoading: false,
    }
  )),
  on(bookSearchActions.searchCharitiesError, (state, { searchError }) => tassign(
    state,
    {
      searchError,
      isLoading: false,
    }
  )),
);
 
export function bookSearchReducer(state, action) {
  return _bookSearchReducer(state, action);
}
