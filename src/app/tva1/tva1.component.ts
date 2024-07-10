import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tva1',
  templateUrl: './tva1.component.html',
  styleUrls: ['./tva1.component.scss']
})
export class TVA1Component {
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
