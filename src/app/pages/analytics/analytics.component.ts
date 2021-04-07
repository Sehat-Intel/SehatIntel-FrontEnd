import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-analytics',
  template: `
  <!-- <router-outlet></router-outlet> -->
  <ngx-tableau-dashboard></ngx-tableau-dashboard>
`,
  // styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };


}
