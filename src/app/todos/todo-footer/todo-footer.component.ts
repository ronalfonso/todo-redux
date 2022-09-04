import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import {filtersValid, setFilter} from "../../filter/filter.actions";
import {eraseALL} from "../todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: filtersValid = 'all';
  filters: filtersValid[] = ['all', 'completed', 'pending' ];

  pending = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.currentFilter = state.filter
      this.pending = state.todos.filter( todo => !todo.completado ).length;
    })
  }

  selectedFilter(filter: filtersValid) {
    this.store.dispatch(setFilter({filter}))
  }

  eraseCompleted() {
    this.store.dispatch(eraseALL())
  }

}
