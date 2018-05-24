import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatisticsListComponent} from './statistics-list/statistics-list.component';
import {MaterialModule} from '../material.module';
import {StatisticsRoutingModule} from './statistics-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StatisticsRoutingModule
  ],
  declarations: [StatisticsListComponent]
})
export class StatisticsModule {
}
