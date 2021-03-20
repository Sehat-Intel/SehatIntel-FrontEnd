import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-d3-pie',
  template: `
    <ngx-charts-pie-chart
      [scheme]="colorScheme"
      [results]="results"
      [legend]="showLegend"
      [labels]="showLabels">
    </ngx-charts-pie-chart>
  `,
})
export class D3PieComponent implements OnDestroy {
  results = [
    {
      name: 'Atelectasis',
      value: 180,
    },
    {
      name: 'Effusion',
      value: 153,
    },
    {
      name: 'Cardiomegaly',
      value: 146,
    },
    {
      name: 'Infiltrate',
      value: 146,
    },
    {
      name: 'Pneumonia',
      value: 120,
    },
    {
      name: 'Pneumothorax',
      value: 98,
    },
    {
      name: 'Mass',
      value: 85,
    },
    {
      name: 'Nodule',
      value: 79,
    },
  ];
  showLegend = true;
  showLabels = true;
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
