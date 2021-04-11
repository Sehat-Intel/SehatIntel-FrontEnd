import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-tableau-dashboard',
  template: `
            <div class="tableau-dashboard">
                <ngx-tableau
                [serverUrl]="serverUrl"
                [report]="report"
                ></ngx-tableau>
          </div>
  `,
  styleUrls: ['./tableau-dashboard.component.scss']
})
export class TableauDashboardComponent implements OnInit {
  // url= "https://public.tableau.com/views/Sehat-IntelVisualization/MainParametersDistribution";
  serverUrl="https://public.tableau.com"
  report="Sehat-IntelVisualization/MainParametersDistribution"
  constructor() { }

  ngOnInit(): void {
  }

}
