import {Action, createReducer, on} from "@ngrx/store";
import {filtersValid, setFilter} from "./filter.actions";


export const initialState: filtersValid = 'all';

const _filterReducer = createReducer<filtersValid, Action>(
  initialState,
  on(setFilter, (_state, {filter}) => filter )
)

export function filterReducer(state: any, action: any) {
  return _filterReducer(state, action)
}
