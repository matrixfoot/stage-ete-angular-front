import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prov4',

  templateUrl: './prov4.component.html',
  styleUrl: './prov4.component.scss'
})
export class Prov4Component {
@Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();

  // Méthodes pour émettre les événements
  next() {
    this.nextStep.emit();
  }

  previous() {
    this.previousStep.emit();
  }
}
