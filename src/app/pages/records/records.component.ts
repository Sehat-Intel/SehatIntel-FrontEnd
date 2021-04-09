import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-records',
  template: `
  <router-outlet></router-outlet>
  `,
})
export class RecordsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
