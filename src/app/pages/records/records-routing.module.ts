import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordsComponent } from './add-records/add-records.component';
import { RecordsComponent } from './records.component';
import { ViewRecordsComponent } from './view-records/view-records.component';

const routes: Routes = [
  {
    path: '',
    component: RecordsComponent,
    children: [
      {
        path: 'add-records',
        component: AddRecordsComponent,
      },
      {
        path: 'view-records',
        component: ViewRecordsComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }
