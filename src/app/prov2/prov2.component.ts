import {Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prov2',

  templateUrl: './prov2.component.html',
  styleUrl: './prov2.component.scss'
})
export class Prov2Component {
  @Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();

  
  next() {
    this.nextStep.emit();
  }
  
  previous() {
    this.previousStep.emit();
  }
}
