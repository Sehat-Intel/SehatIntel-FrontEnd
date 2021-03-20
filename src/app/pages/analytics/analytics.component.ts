import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-analytics',
  template: `
  <router-outlet></router-outlet>
`,
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };


}
