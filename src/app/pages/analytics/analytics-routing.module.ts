import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';
import { MapComponent } from './map/map.component';
import { TableauDashboardComponent } from './tableau-dashboard/tableau-dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: 'dashboard'},
      {
        path: 'dashboard',
        component: TableauDashboardComponent,
      },
      {
        path: 'map',
        component: MapComponent
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
