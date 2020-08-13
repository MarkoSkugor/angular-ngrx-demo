import { createAction, props } from '@ngrx/store';

export const searchCharities = createAction(
  '[Charity Search] Increment',
  props<{ searchTerm: string }>(),
);
export const searchCharitiesSuccess = createAction(
  '[Charity Search] Decrement',
  props<{ searchResults: any[] }>(),
);
export const searchCharitiesError = createAction(
  '[Charity Search] Reset',
  props<{ searchError: any }>(),
);
