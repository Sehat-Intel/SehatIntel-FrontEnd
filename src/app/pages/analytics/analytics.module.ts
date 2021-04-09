import { NgModule } from '@angular/core';
import { AnalyticsComponent } from './analytics.component';
import { AnalyticsRoutingModule } from "./analytics-routing.module";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule,
  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbSpinnerModule,
  NbUserModule,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { TableauDashboardComponent } from './tableau-dashboard/tableau-dashboard.component';
import { TableauModule } from 'ngx-tableau';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [AnalyticsComponent, TableauDashboardComponent, MapComponent],
  imports: [
    CommonModule,
    FormsModule,
    AnalyticsRoutingModule,
    ReactiveFormsModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSpinnerModule,
    NbSelectModule,
    NbIconModule,
    TableauModule
  ]
})
export class AnalyticsModule { }
