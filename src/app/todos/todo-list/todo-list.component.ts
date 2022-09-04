import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

import {Todo} from "../models/todo.model";
import {AppState} from "../../app.reducers";
import {filtersValid} from "../../filter/filter.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  currentFilter: filtersValid = "all";

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(({todos, filter}) => {
      this.todos = todos;
      this.currentFilter = filter;
    })
  }

}
