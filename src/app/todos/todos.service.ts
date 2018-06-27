import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
    value: string;
    complete: boolean;
}

export interface TodosInfo {
    todos: Todo[];
    deleted: number;
}

@Injectable({
    providedIn: 'root'
})
export class TodosService {

  private messageSource = new BehaviorSubject<TodosInfo>({
    deleted: 0,
    todos: [
        {value: 'Buy bread', complete: false},
        {value: 'Learn Angular 6', complete: false},
        {value: 'Read about Ivy', complete: false},
        {value: 'Pick up the kids', complete: false}
    ],
  });
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: TodosInfo) {
    this.messageSource.next(message);
  }
}
