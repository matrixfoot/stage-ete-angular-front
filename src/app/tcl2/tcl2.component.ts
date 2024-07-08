import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tcl2',
  templateUrl: './tcl2.component.html',
  styleUrls: ['./tcl2.component.scss']
})
export class TCL2Component {
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
