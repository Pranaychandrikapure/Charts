import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { BarchartComponent } from "./barchart/barchart.component";
import { HorizantalbarComponent } from "./horizantalbar/horizantalbar.component";
import { PiechartComponent } from './piechart/piechart.component';
import { LegendsgraphComponent } from './legendsgraph/legendsgraph.component';
import { CollectionmarketComponent } from './collectionmarket/collectionmarket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgxEchartsModule, BarchartComponent, HorizantalbarComponent,PiechartComponent,LegendsgraphComponent,CollectionmarketComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 }
