import { Component } from '@angular/core';
import { AllcomoditiesComponent } from '../allcomodities/allcomodities.component';

@Component({
  selector: 'app-lots',
  standalone: true,
  imports: [AllcomoditiesComponent],
  templateUrl: './lots.component.html',
  styleUrl: './lots.component.css'
})
export class LotsComponent {

}
