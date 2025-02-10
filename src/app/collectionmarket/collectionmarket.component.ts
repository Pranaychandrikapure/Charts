import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-collectionmarket',
  standalone: true,
  imports: [NgxEchartsModule, RouterOutlet],
  templateUrl: './collectionmarket.component.html',
  styleUrls: ['./collectionmarket.component.css']
})
export class CollectionmarketComponent {
  indicationValues = [
    { name: 'Rice', value: 2 },
    { name: 'Sugar', value: 1.2 },
    { name: 'Bajara', value: 2.4 },
    { name: 'Coffee Beans', value: 3.6 }
  ];

  chartOptions = {
    polar: {
      show: false,
      radius: [20, '80%'],
      center: ['50%', '50%'],
    },
    angleAxis: {
      show: false
    },
    radiusAxis: {
      type: 'category',
      data: ["54.1", "31.1", "54.1"]
    },
    series: [
      {
        type: 'bar',
        data: this.indicationValues.map(item => ({
          value: item.value,
          name: item.name,
          itemStyle: { color: this.getGradientColor('#E1FC73', '#6E991E') }
        })),
        coordinateSystem: 'polar',
        label: {
          show: true,
          position: 'inside',
          formatter: '{b}: {c}',
          color: '#ffffff',
          fontSize: 12,
          fontWeight: 'bold'
        }
      }
    ]
  };

  getGradientColor(color1: string, color2: string) {
    return {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [
        { offset: 0, color: color1 },
        { offset: 1, color: color2 }
      ]
    };
  }
}