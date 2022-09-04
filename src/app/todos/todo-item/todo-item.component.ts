import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../models/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import * as actions from "../todo.actions";
import {AppState} from "../../app.reducers";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo('');
  @ViewChild('inputFisic') txtInputFisic: ElementRef;
  chkCompletado: FormControl;
  txtInput: FormControl;

  editing = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.todo = {
      ...this.todo,
    };
    this.chkCompletado = new FormControl<any>(this.todo.completado);
    this.txtInput = new FormControl<any>(this.todo.texto, Validators.required)

    this.chkCompletado.valueChanges.subscribe(() => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    })

  }

  edit() {
    this.editing = true
    this.txtInput.setValue(this.todo.texto)
    setTimeout(() => {
      this.txtInputFisic.nativeElement.select();
    }, 1)
  }

  finishEdition() {
    this.editing = false;
    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.todo.texto) return;
    this.store.dispatch(
      actions.editar({
        id: this.todo.id,
        texto: this.txtInput.value
      })
    )
  }

  delete() {
    this.store.dispatch(actions.erase({id: this.todo.id}))
  }

}
