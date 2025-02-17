import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-barrace',
  standalone: true,
  imports: [NgxEchartsModule, RouterOutlet],
  templateUrl: './barrace.component.html',
  styleUrls: ['./barrace.component.css']
})
export class BarraceComponent implements OnInit {
  data: number[] = [];
  chartOptions: EChartsOption = {};

  ngOnInit(): void {
    // Generate initial data
    this.data = Array.from({ length: 5 }, () => Math.round(Math.random() * 200));

    // Initialize chart options
    this.chartOptions = {
      xAxis: { max: 'dataMax' },
      yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 3 // Only the top 2 bars will be displayed
      },
      series: [
        {
          realtimeSort: true,
          name: 'X',
          type: 'bar',
          data: this.data,
          label: {
            show: true,
            position: 'left',
            valueAnimation: true
          }
        }
      ],
      legend: { show: true },
      animationDuration: 0,
      animationDurationUpdate: 3000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear'
    };

    // Start updating the chart at intervals
    setInterval(() => {
      this.run();
    }, 3000);
  }

  run() {
    for (let i = 0; i < this.data.length; ++i) {
      this.data[i] += Math.random() > 0.9 ? Math.round(Math.random() * 2000) : Math.round(Math.random() * 200);
    }

    // Update the chart options dynamically
    this.chartOptions = { 
      ...this.chartOptions, 
      series: [{ type: 'bar', data: [...this.data] }] 
    };
  }
}
