import { Component,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-page-garde2',
  templateUrl: './page-garde2.component.html',
  styleUrls: ['./page-garde2.component.scss']
})
export class PageGarde2Component {
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




