import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { color } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-horizantalbar',
  standalone: true,
  imports: [NgxEchartsModule, RouterOutlet],
  templateUrl: './horizantalbar.component.html',
  styleUrls: ['./horizantalbar.component.css']
})
export class HorizantalbarComponent {
  chartOptions = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow' // 'shadow' for better bar highlighting
      }
    },
    legend: {},
    grid: {
      left: '2%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLine: { show: false }, // ❌ Remove x-axis line
      axisTick: { show: false }, // ❌ Remove x-axis ticks
      splitLine: { show: false }, // ❌ Remove x-axis grid lines
      axisLabel: { show: false } // ❌ Remove x-axis labels
    },
    yAxis: {
      type: 'category',
      data: ['Stats'],
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "No. of CA’s",
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 14 // Increase label size for better readability
        },
        emphasis: {
          focus: 'series'
        },
        barWidth: 40, // 🔥 Increased bar thickness (default was 30)
        itemStyle: {
          borderRadius: [0, 0, 0, 0], // 🔥 More rounded edges on both ends,
          color:'#E1FC73',
        },
        data: [320]
      },
      {
        name: 'Active CA’s',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 14
        },
        emphasis: {
          focus: 'series'
        },
        barWidth: 40, // 🔥 Increased thickness
        itemStyle: {
          borderRadius: [0, 0, 0, 0], // 🔥 No rounding
          color:'#AACE50'
        },
        data: [120]
      },
      {
        name: 'Inactive CA’s',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 14
        },
        emphasis: {
          focus: 'series'
        },
        barWidth: 40, // 🔥 Increased thickness
        itemStyle: {
          borderRadius: [0, 0, 0, 0],
          color:'#6E991E'
        },
        data: [220]
      },
      {
        name: 'Suspended',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 14
        },
        emphasis: {
          focus: 'series'
        },
        barWidth: 40, // 🔥 Increased thickness
        itemStyle: {
          borderRadius: [0, 0, 0, 0],
          color:'#3D6811'
        },
        data: [150]
      },
      {
        name: 'Expire this FY',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 14
        },
        emphasis: {
          focus: 'series'
        },
        barWidth: 40, // 🔥 Increased thickness
        itemStyle: {
          borderRadius: [0, 25, 25, 0], // 🔥 More rounded edges on right side
          color:'#2C3805'
        },
        data: [820]
      }
    ]
  };
}
