import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "./models/todo.model";
import {filtersValid} from "../filter/filter.actions";

@Pipe({
  name: 'filtersTodo'
})
export class FiltersPipe implements PipeTransform {

  transform(todos: Todo[], filter: filtersValid): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completado)

      case 'pending':
        return todos.filter(todo => !todo.completado)

      default:
        return todos

    }
  }

}
