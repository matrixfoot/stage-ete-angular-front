import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prov3',
 
  templateUrl: './prov3.component.html',
  styleUrl: './prov3.component.scss'
})
export class Prov3Component {
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
