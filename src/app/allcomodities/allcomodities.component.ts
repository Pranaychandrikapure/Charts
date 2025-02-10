import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-allcomodities',
  standalone: true,
  imports: [NgxEchartsModule,RouterOutlet],
  templateUrl: './allcomodities.component.html',
  styleUrl: './allcomodities.component.css'
})
export class AllcomoditiesComponent {
  chartOptions = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical', 
      left: '1%', 
      top: '10%',
      itemGap: 11, // Increase gap between items
      backgroundColor: '#f0f0f0', // Optional: Add background for clarity
      padding: [20, 50, 20, 20], // Apply padding inside the legend container
      borderRadius: 10, // Optional: Rounded edges
      borderColor: '#ccc', // Optional: Border color
      borderWidth: 0, // Optional: Border width
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['35%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'left'
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
          width: 90, 
          height: 90, 
        },
        left: 'center',
        top: 'center',
      }
    ]
  };
  

}
