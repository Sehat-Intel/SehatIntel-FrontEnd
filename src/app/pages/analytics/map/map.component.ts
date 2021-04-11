import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // url = "https://public.tableau.com/views/Sehat-IntelDiseasesMapping/Dashboard1?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link"
  serverUrl="https://public.tableau.com"
  report="Sehat-IntelDiseasesMapping/Dashboard1"
  constructor() {
    // this.reload();
  }

  ngOnInit(): void {
    // location.reload();
  }

}
