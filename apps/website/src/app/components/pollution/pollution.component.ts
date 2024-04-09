import { Component, ViewChild, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent
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
  imports: [MatIconModule],
  templateUrl: './pollution.component.html'
})
export class PollutionComponent {
  @ViewChild("chart") chart!: ChartComponent;
  data = input<1 | 2 | 3 | 4 | 5>(1);

  constructor() {
  }

}
