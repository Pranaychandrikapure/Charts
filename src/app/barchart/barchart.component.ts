import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { RouterOutlet } from '@angular/router';
import { color } from 'echarts';

@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [NgxEchartsModule, RouterOutlet],
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent {
  title = 'charts';

  data: number[] = [40.6, 50.9, 60.0, 70.4, 80.7, 90.7];
  markPointData: any[] = [];
  chartOptions: any = {};

  constructor() {
    this.generateMarkPoints(); // Initialize markPointData
    this.initializeChart(); // Set up chart options
  }

  // Generate mark points dynamically and match colors with bars
  generateMarkPoints(): void {
    this.markPointData = this.data.map((value, index) => ({
      name: `Point ${index + 1}`,
      value,
      xAxis: index,
      yAxis: value + 1, // Adjust y-axis for better visibility
      itemStyle: { color: this.getColor(value) } // Set same color as bars
    }));
  }

  // Function to generate color dynamically with multiple shades of green
  getColor(value: number): string {
    const min = Math.min(...this.data);
    const max = Math.max(...this.data);
    const percentage = (value - min) / (max - min); // Normalize value between 0-1

    // Define green shades (light to dark)
    const colors = ['#E1FC73', '#AACE50', '#6E991E', '#3D6811', '#2C3805'];

    // Get color based on percentag3
    if (percentage < 0.2) return colors[4]; // Lightest green
    if (percentage < 0.4) return colors[3]; // Light green
    if (percentage < 0.6) return colors[2]; // Medium green
    if (percentage < 0.8) return colors[1]; // Dark green
    return colors[0]; // Darkest green1
  }

  // Initialize chart configuration
  initializeChart(): void {
    this.chartOptions = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Rainfall']
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '',
          type: 'bar',
          barWidth: 60, // Adjust bar width
          data: this.data.map(value => ({
            value,
            itemStyle: { color: this.getColor(value) } // Assign dynamic color based on value
          })),
          markPoint: { 
            Symbol: 'rect',
            symbolSize: [80, 80],
            itemStyle: {
              shadowBlur: 3, // Add a shadow effect
              borderWidth: 2, // Border width
            },
            color:'#AACE50',
            data: this.markPointData
          }
        }
      ]
    };
  }
}
