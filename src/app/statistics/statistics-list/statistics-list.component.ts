import {Component, OnInit} from '@angular/core';
import { Todo, TodosService, TodosInfo } from '../../todos/todos.service';

interface Stats {
  total: number;
  complete: number;
  incomplete: number;
  deleted: number;
}

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.css']
})
export class StatisticsListComponent implements OnInit {
  stats: Stats;

  constructor(
    private todosService: TodosService
  ) {}

  ngOnInit() {
    this.todosService.currentMessage.subscribe(todosInfo => this.recalculate(todosInfo));
  }

  recalculate(todosInfo: TodosInfo) {
    console.log(todosInfo);
    this.stats = <Stats>{
      total: todosInfo.todos.length,
      complete: todosInfo.todos.filter(todo => todo.complete).length,
      incomplete: todosInfo.todos.filter(todo => !todo.complete).length,
      deleted: todosInfo.deleted
    };
  }
}
