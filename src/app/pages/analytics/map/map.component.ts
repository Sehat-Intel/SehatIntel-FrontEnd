import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  url = "https://public.tableau.com/views/Sehat-IntelVisualization/MainParametersDistribution?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link"
  constructor() {
    // this.reload();
  }

  ngOnInit(): void {
    // location.reload();
  }

}
