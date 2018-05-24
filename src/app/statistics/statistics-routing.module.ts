import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StatisticsListComponent} from './statistics-list/statistics-list.component';

const routes: Routes = [
  {path: '', component: StatisticsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule {
}
