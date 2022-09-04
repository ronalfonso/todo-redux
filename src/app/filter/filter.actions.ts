import {createAction, props} from "@ngrx/store";

export type filtersValid = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
  '[Filter] Set filter',
  props<{filter: filtersValid}>()
);
