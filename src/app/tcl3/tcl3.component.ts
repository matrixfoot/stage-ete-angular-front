import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tcl3',
  templateUrl: './tcl3.component.html',
  styleUrls: ['./tcl3.component.scss']
})
export class TCL3Component {
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
