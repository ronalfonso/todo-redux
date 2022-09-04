import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import * as actions from "../todo.actions";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {

  completeds = false;

  constructor(private store: Store<AppState>) { }


  toggleAll() {
    this.completeds = !this.completeds;
    this.store.dispatch(actions.toogleAll({completed: this.completeds}))
  }

}
