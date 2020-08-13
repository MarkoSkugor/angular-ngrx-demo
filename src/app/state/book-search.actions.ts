import { createAction, props } from '@ngrx/store';

export const searchCharities = createAction(
  '[Book Search] Increment',
  props<{ searchTerm: string }>(),
);
export const searchCharitiesSuccess = createAction(
  '[Book Search] Decrement',
  props<{ searchResults: any }>(),
);
export const searchCharitiesError = createAction(
  '[Book Search] Reset',
  props<{ searchError: any }>(),
);
