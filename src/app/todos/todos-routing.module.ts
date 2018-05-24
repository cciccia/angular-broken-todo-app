import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TodosListComponent} from './todos-list/todos-list.component';

const routes: Routes = [
  {path: '', component: TodosListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {
}
