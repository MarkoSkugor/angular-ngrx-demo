import { createReducer, on } from '@ngrx/store';
import * as charitySearchActions from './charity-search.actions';
import { tassign } from 'tassign';

import { CharitySearchState } from './charity-search-state.interface';
 
export const initialState: CharitySearchState = {
  searchTerm: '',
  searchResults: [],
  searchError: undefined,
  isLoading: false,
};
 
const _charitySearchReducer = createReducer(initialState,
  on(charitySearchActions.searchCharities, (state, { searchTerm }) => tassign(
    state,
    {
      searchTerm,
      isLoading: true,
    }
  )),
  on(charitySearchActions.searchCharitiesSuccess, (state, { searchResults }) => tassign(
    state,
    {
      searchResults,
      isLoading: false,
    }
  )),
  on(charitySearchActions.searchCharitiesError, (state, { searchError }) => tassign(
    state,
    {
      searchError,
      isLoading: false,
    }
  )),
);
 
export function charitySearchReducer(state, action) {
  return _charitySearchReducer(state, action);
}
