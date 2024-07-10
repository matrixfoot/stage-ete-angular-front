import { Component ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-foprolos-compo',
  templateUrl: './foprolos-compo.component.html',
  styleUrls: ['./foprolos-compo.component.scss']
})
export class FOPROLOSCOMPOComponent {
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
