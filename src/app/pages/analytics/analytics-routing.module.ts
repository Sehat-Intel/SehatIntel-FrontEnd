import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';
import { TableauDashboardComponent } from './tableau-dashboard/tableau-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsComponent,
    children: [
      {
        path: 'dashboard',
        component: TableauDashboardComponent,
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AnalyticsRoutingModule { }
