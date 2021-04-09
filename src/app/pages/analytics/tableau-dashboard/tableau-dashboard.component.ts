import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-tableau-dashboard',
  templateUrl: './tableau-dashboard.component.html',
  styleUrls: ['./tableau-dashboard.component.scss']
})
export class TableauDashboardComponent implements OnInit {
  url = "https://public.tableau.com/views/Sehat-IntelVisualization/MainParametersDistribution?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link"
  constructor() { }

  ngOnInit(): void {
    // location.reload();
  }

}
