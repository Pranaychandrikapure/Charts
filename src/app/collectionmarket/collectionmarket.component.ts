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
      data: ["54.1%", "31.1%", "54.1%"]
    },
    tooltip: {},
    series: [
      {
        type: 'bar',
        data: [
          { value: 2, itemStyle: { color: this.getGradientColor('#E1FC73', '#6E991E') } }, // Light to Medium Green
          { value: 1.2, itemStyle: { color: this.getGradientColor('#6E991E', '#2C3805') } }, // Medium to Dark Green
          { value: 2.4, itemStyle: { color: this.getGradientColor('#2C3805', '#1B2404') } }, // Dark to Deepest Green
          { value: 3.6, itemStyle: { color: this.getGradientColor('#1B2404', '#0F1402') } }  // Darkest Variation
        ],
        coordinateSystem: 'polar',
        label: {
          show: false,
          position: 'middle',
          formatter: '{b}: {c}',
          color: '#2C3805' // Dark green for contrast
        }
      }
    ]
  };

  // Function to create gradient colors
  getGradientColor(color1: string, color2: string) {
    return {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [
        { offset: 0, color: color1 }, // Lighter shade at start
        { offset: 1, color: color2 }  // Darker shade at end
      ]
    };
  }
}
