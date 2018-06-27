import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosListComponent} from './todos-list/todos-list.component';
import {TodosRoutingModule} from './todos-routing.module';
import {MaterialModule} from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatIconRegistry } from '@angular/material';
import { TodosService } from './todos.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TodosRoutingModule,
    MatIconModule
  ],
  providers: [
    MatIconRegistry
  ],
  declarations: [TodosListComponent]
})
export class TodosModule {
}
