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
import { NgxDropzoneModule } from 'ngx-dropzone';
import { UserDataFormComponent } from './user-data-form/user-data-form.component';

@NgModule({
  declarations: [AnalyticsComponent, UserDataFormComponent],
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
    NgxDropzoneModule
  ]
})
export class AnalyticsModule { }
