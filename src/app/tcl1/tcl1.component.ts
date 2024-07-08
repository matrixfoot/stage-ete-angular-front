import { Component ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tcl1',
  templateUrl: './tcl1.component.html',
  styleUrls: ['./tcl1.component.scss']
})
export class TCL1Component {
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
