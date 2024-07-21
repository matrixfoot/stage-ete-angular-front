import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-saisie-prov',

  templateUrl: './saisie-prov.component.html',
  styleUrls: ['./saisie-prov.component.scss'],
  
})
export class SaisieProvComponent implements OnInit {

  currentStep = 0;
  totalSteps = 4;

  // Lifecycle hook to log the initial currentStep
  ngOnInit() {
    console.log(this.currentStep);
  }

  // Method to go to the next step
  next() {
    if (this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
      console.log(this.currentStep);
    }
  }

  // Method to go back to the previous step
  previous() {
    if (this.currentStep > 0) {
      this.currentStep--;
      console.log(this.currentStep);
    }
  }
}
