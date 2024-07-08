import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tva2',
  templateUrl: './tva2.component.html',
  styleUrls: ['./tva2.component.scss']
})
export class TVA2Component {
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
