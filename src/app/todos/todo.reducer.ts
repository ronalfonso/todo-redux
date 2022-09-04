import { createReducer, on } from '@ngrx/store';
import {crear, editar, erase, eraseALL, toggle, toogleAll} from "./todo.actions";
import {Todo} from "./models/todo.model";

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a tanos'),
];

export const _todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(erase, (state, {id}) => state.filter(todo => todo.id !== id) ),
  on(eraseALL, state => state.filter( todo => !todo.completado)),
  on(toggle, (state, {id}) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, {id, texto}) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    });
  }),
  on(toogleAll, (state, {completed}) => {
    return state.map( todo => {
      return {
        ...todo,
        completado: completed
      }
    })
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action)
}
