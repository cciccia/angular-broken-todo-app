import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodosService, Todo, TodosInfo } from '../todos.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todosForm: FormGroup;

  errors = {
    todo: 'Todo must be between 3 and 64 characters.'
  };

  todosInfo: TodosInfo;

  constructor(
      private formBuilder: FormBuilder,
      private todosService: TodosService
  ) {
      this.createForm();
  }

  ngOnInit() {
    this.todosService.currentMessage.subscribe(todosInfo => this.todosInfo = todosInfo);
  }

  createForm() {
    this.todosForm = this.formBuilder.group({
      todo: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(64)
      ]]
    });
  }

  toggleCompleteTodo() {
    this.todosService.changeMessage(this.todosInfo);
  }

  addNewTodo(todoValue: String) {
    this.todosService.changeMessage({
      todos: [...this.todosInfo.todos, <Todo>{value: todoValue, complete: false}],
      deleted: this.todosInfo.deleted
    });
  }

  deleteTodo(todo: Todo) {
    const idx = this.todosInfo.todos.indexOf(todo);
    this.todosService.changeMessage({
      todos: this.todosInfo.todos.filter((_, i) => i !== idx),
      deleted: this.todosInfo.deleted + 1
    });
  }
}
