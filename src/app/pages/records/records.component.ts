import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-records',
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
