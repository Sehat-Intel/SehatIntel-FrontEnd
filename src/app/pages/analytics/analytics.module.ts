import { NgModule } from '@angular/core';
import { AnalyticsComponent } from './analytics.component';
import { AnalyticsRoutingModule } from "./analytics-routing.module";
import { CommonModule } from '@angular/common';
import { TableauDashboardComponent } from './tableau-dashboard/tableau-dashboard.component';
import { TableauModule } from 'ngx-tableau';

@NgModule({
  declarations: [AnalyticsComponent, TableauDashboardComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    TableauModule
  ]
})
export class AnalyticsModule { }
