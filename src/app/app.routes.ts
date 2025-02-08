import { Routes } from '@angular/router';
import { HorizantalbarComponent } from './horizantalbar/horizantalbar.component';
import { BarchartComponent } from './barchart/barchart.component';

export const routes: Routes = [
    {
        path: 'horizantalbar',
        component:HorizantalbarComponent
    },
    {
        path: 'barchart',
        component:BarchartComponent
    }
];
