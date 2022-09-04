import {createAction, props} from "@ngrx/store";


export const crear = createAction(
  '[TODO] Crea Todo',
  props<{texto: string}>()
)

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{id: number}>()
)

export const editar = createAction(
  '[TODO] Editar Todo',
  props<{id: number, texto: string}>()
)

export const erase = createAction(
  '[TODO] Borrar Todo',
  props<{id: number}>()
)

export const toogleAll = createAction(
  '[TODO] Toggle All Todo',
  props<{completed: boolean}>()
)

export const eraseALL = createAction(
  '[TODO] Limpiar Todo',
)
