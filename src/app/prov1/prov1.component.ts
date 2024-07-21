import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-prov1',
 
  
  templateUrl: './prov1.component.html',
  styleUrl: './prov1.component.scss'
})
export class Prov1Component {
  @Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();

  
  next() {
    this.nextStep.emit();
  }
  
  previous() {
    this.previousStep.emit();
  }

}
