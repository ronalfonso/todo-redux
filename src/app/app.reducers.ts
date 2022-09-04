import {ActionReducerMap} from "@ngrx/store";
import {Todo} from "./todos/models/todo.model";
import * as todos from "./todos/todo.reducer";
import {filtersValid} from "./filter/filter.actions";
import * as filter from "./filter/filter.reducer";

export interface AppState {
  todos: Todo[],
  filter: filtersValid
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todos.todoReducer,
  filter: filter.filterReducer
}
