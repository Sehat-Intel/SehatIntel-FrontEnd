import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Atelectasis', 'Effusion', 'Cardiomegaly', 'Infiltrate','Pneumonia', 'Pneumothorax', 'Mass', 'Nodule'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Diseases',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data : [
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
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
