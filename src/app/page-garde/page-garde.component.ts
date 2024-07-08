import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-garde',
  templateUrl: './page-garde.component.html',
  styleUrls: ['./page-garde.component.scss']
})
export class PageGardeComponent {
  // Déclaration des événements
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
