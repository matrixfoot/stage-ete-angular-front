import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-wizard-component',
  templateUrl: './tax-wizard-component.component.html',
  styleUrls: ['./tax-wizard-component.component.scss']
})
export class TaxWizardComponentComponent {
   currentStep = 0;
  totalSteps = 11;

  // Méthode pour aller à l'étape suivante
  next() {
    if (this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
      console.log(this.currentStep);
    }
  }

  // Méthode pour revenir à l'étape précédente
  previous() {
    if (this.currentStep > 0) {
      this.currentStep--;
      console.log(this.currentStep);
    }
  }

}
