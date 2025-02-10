import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-allcomodities',
  standalone: true,
  imports: [NgxEchartsModule, RouterOutlet],
  templateUrl: './allcomodities.component.html',
  styleUrl: './allcomodities.component.css'
})
export class AllcomoditiesComponent {
  chartOptions = {

    title: {
      text: 'Top 10 Commodities',
      left: 'center',
      top: 5,
      textStyle: {
        color: '#000',
        size:'50px',
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: "60%", // Moves the legend to the left
      top: '30%', // Centers it vertically
      itemGap: 6,
      backgroundColor: '#f0f0f0',
      padding: [20, 20, 10, 10],
      borderRadius: 5,
      borderColor: '#ccc',
      borderWidth: 1
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['35%', '60%'],
        center: ['35%', '60%'], // Moves the pie chart towards the left
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'right',
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Rice' },
          { value: 400, name: 'Sugar' },
          { value: 450, name: 'Bajara' },
          { value: 484, name: 'Red Chana' },
          { value: 300, name: 'Soyabeans' },
          { value: 100, name: 'Coffee Beans' },
          { value: 380, name: 'Maize' },
          { value: 200, name: 'Coconut' },
          { value: 210, name: 'Cotton' },
          { value: 190, name: 'Black Chana' },
        ],
      }
    ],
    graphic: [
      {
        type: 'image',
        id: 'logo',
        style: {
          image: "../../assets/umplogo1.jpg",
          width: 100,
          height: 100,
        },
        left: '29%',
        top: '46%',
      }
    ]
  };
}
