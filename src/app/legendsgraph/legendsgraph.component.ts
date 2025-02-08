import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-legendsgraph',
  standalone: true,
  imports: [RouterOutlet, NgxEchartsModule],
  templateUrl: './legendsgraph.component.html',
  styleUrls: ['./legendsgraph.component.css']
})
export class LegendsgraphComponent implements OnInit {
  series: any[] = [
    // First Pair (Stack 'a')
    {
      data: [100, 120, 90],
      type: 'bar',
      stack: 'a',
      name: '2013',
      itemStyle: { color: this.getGradientColor('#E3FD91', '#A4C639') } 
    },

    // Second Pair (Stack 'b')
    {
      data: [110, 130, 95],
      type: 'bar',
      stack: 'b',
      name: '2014',
      itemStyle: { color: this.getGradientColor('#7BAB21', '#2C3805') }
    },

    // Third Pair (Stack 'c')
    {
      data: [120, 140, 100],
      type: 'bar',
      stack: 'c',
      name: '2015',
      itemStyle: { color: this.getGradientColor('#2C3805', '#1B2404') } 
    }
  ];

  chartOptions: any = {}; // Chart options initialized later

  ngOnInit(): void {
    this.generateStackInfo(); // Generate stacking info
    this.initializeChart(); // Initialize chart options
  }

  generateStackInfo(): void {
    const stackInfo: any = {};
    
    for (let i = 0; i < this.series[0].data.length; ++i) {
      for (let j = 0; j < this.series.length; ++j) {
        const stackName = this.series[j].stack;
        if (!stackName) continue;

        if (!stackInfo[stackName]) {
          stackInfo[stackName] = { stackStart: [], stackEnd: [] };
        }

        const info = stackInfo[stackName];
        const data = this.series[j].data[i];

        if (data && data !== '-') {
          if (info.stackStart[i] == null) {
            info.stackStart[i] = j;
          }
          info.stackEnd[i] = j;
        }
      }
    }

    for (let i = 0; i < this.series.length; ++i) {
      const data = this.series[i].data;
      const info = stackInfo[this.series[i].stack];

      for (let j = 0; j < this.series[i].data.length; ++j) {
        const isEnd = info.stackEnd[j] === i;
        const topBorder = isEnd ? 10 : 0;
        const bottomBorder = 0;

        data[j] = {
          value: data[j],
          itemStyle: {
            borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
          }
        };
      }
    }
  }

  initializeChart(): void {
    this.chartOptions = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        top: 'bottom'
      },
      xAxis: {
        type: 'category',
        data: ['Demand', 'Collection', 'Balance']
      },
      yAxis: {
        type: 'value'
      },
      series: this.series
    };
  }
  getGradientColor(color1: string, color2: string) {
    return {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [
        { offset: 0, color: color1 }, // Lighter Shade
        { offset: 1, color: color2 } // Darker Shade
      ]
    };
  }
}
