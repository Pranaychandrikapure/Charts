import { Component, HostListener } from '@angular/core';
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
  chartOptions: any;

  constructor() {
    this.updateChartOptions(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateChartOptions(event.target.innerWidth);
  }

  updateChartOptions(screenWidth: number) {
    this.chartOptions = {
      title: {
        text: 'Top 10 Commodities',
        left: 'center',
        top: 5,
        textStyle: {
          color: '#000',
          size: screenWidth < 768 ? '30px' : '50px',
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: screenWidth < 768 ? 'horizontal' : 'vertical',
        left: screenWidth < 768 ? 'center' : '66%',
        top: screenWidth < 768 ? '78%' : '23%',
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
          radius: screenWidth < 768 ? ['40%', '60%'] : ['60%', '80%'],
          center: screenWidth < 768 ? ['50%', '46%'] : ['36%', '56%'],
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
          left: screenWidth < 768 ? ' 42%' : '28%',
          top: screenWidth < 768 ? '32%' : '40%',
        }
      ]
    };
  }
}