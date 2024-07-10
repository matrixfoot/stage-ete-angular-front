import { Component ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rs',
  templateUrl: './rs.component.html',
  styleUrls: ['./rs.component.scss']
})
export class RSComponent {
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
