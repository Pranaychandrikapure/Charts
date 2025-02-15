import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
    selector: 'app-outside-stats',
    standalone: true,
    imports: [NgxEchartsModule,RouterOutlet],
    templateUrl: './outside-stats.component.html',
    styleUrl: './outside-stats.component.scss',
})
export class OutSideStatsComponent implements OnInit {
    chartOptions: any;

    ngOnInit() {
        this.initializeChart();
    }

    initializeChart() {
        // Define min, max, and interval dynamically
        const min = 2000;
        const max = 20000;
        const interval = Math.ceil(((max + 1000) - min) / 4);

        // Sample data
        const tradeSalesData = [2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

        this.chartOptions = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999',
                    },
                },
            },

            grid: {
                left: '15%',
                right: '15%',
                containLabel: true,
            },

            xAxis: [
                {
                    type: 'category',
                    data: months,
                    axisPointer: {
                        type: 'shadow',
                    },
                },
            ],

            yAxis: [
                {
                    type: 'value',
                    name: 'Trade Sales Value',
                    min: min,
                    max: max + 1000,
                    interval: interval,
                    axisLabel: {
                        formatter: '{value}k',
                    },
                    nameLocation: 'center',
                    nameGap: 75,
                    nameTextStyle: {
                        color: '#333',
                        fontSize: 14,
                        fontWeight: 'bold',
                    },
                    axisLine: { show: false },
                    splitLine: { lineStyle: { type: 'dashed', color: '#ccc' } },
                },
            ],

            series: [
                {
                    name: 'Trade Sales Value',
                    type: 'line',
                    tooltip: {
                        valueFormatter: (value: string) => value + 'k',
                    },
                    lineStyle: { color: '#36BF36', width: 2 },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 2,
                            colorStops: [
                                { offset: 0, color: '#36BF36' }, // Solid green
                                { offset: 1, color: '#36BF3600' }, // Fully transparent
                            ],
                        },
                    },
                    data: tradeSalesData,
                },

                // ✅ Using markLine to show vertical reference lines
                {
                    name: 'Reference Lines',
                    type: 'line',
                    markLine: {
                        silent: true,
                        symbol: ['none', 'none'], // Remove arrowheads
                        lineStyle: { type: 'dashed', color: '#FF5733' },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{b}', // Show label names
                        },
                        data: [
                            { xAxis: 'Jan', name: 'Ref 1' },
                            { xAxis: 'Mar', name: 'Ref 2' },
                            { xAxis: 'May', name: 'Ref 3' },
                            { xAxis: 'Jul', name: 'Ref 4' },
                            { xAxis: 'Sep', name: 'Ref 5' },
                        ],
                    },
                },
            ],
        };
    }
}
