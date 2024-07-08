import { Component ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dt-comp',
  templateUrl: './dt-comp.component.html',
  styleUrls: ['./dt-comp.component.scss']
})
export class DTCOMPComponent {
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
