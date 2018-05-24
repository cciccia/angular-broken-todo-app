import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'todos', loadChildren: './todos/todos.module#TodosModule'},
  {path: 'statistics', loadChildren: './statistics/statistics.module#StatisticsModule'},
  {path: '**', redirectTo: '/todos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
