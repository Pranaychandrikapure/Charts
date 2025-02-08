import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-piechart',
  standalone: true,
  imports: [NgxEchartsModule, RouterOutlet],
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  chartOptions =  {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [20, 130],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 40, name: 'rose 1',itemStyle: { color: '#E3FD91' } },
          { value: 38, name: 'rose 2', itemStyle: { color: '#7BAB21' }  },
          { value: 32, name: 'rose 3', itemStyle: { color: '#2C3805' } },
  
        ]
      }
    ]
  };
}