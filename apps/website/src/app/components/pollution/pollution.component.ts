import { Component, ViewChild, computed, effect, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  selector: 'app-pollution',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgApexchartsModule],
  templateUrl: './pollution.component.html',
  styleUrl: './pollution.component.css'
})
export class PollutionComponent {
  @ViewChild("chart") chart!: ChartComponent;
  data = input<0 | 1 | 2 | 3 | 4 | 5>(3);
  chartOptions = computed<ChartOptions>(() => this.buildChart(this.data()));

  constructor() {
  }

  private buildChart(data: number): ChartOptions {
    return {
      series: [(data * 100) / 5],
      chart: {
        height: 350,
        type: 'radialBar',
        offsetY: -20,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: '97%',
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: '#999',
              opacity: 1,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -2,
              fontSize: '22px'
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          inverseColors: true,
          colorStops: [
            {
              offset: 0,
              color: "#EB656F",
              opacity: 1
            },
            {
              offset: 20,
              color: "#FAD375",
              opacity: 1
            },
            {
              offset: 60,
              color: "#61DBC3",
              opacity: 1
            },
            {
              offset: 100,
              color: "#95DA74",
              opacity: 1
            }
          ]
        },
      },
      labels: ['Average Results'],
    };
  }

}
