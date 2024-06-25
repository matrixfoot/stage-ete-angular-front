import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-rub',
  templateUrl: './rub.component.html',
  styleUrls: ['./rub.component.scss']
})
export class RubComponent  implements OnInit {
  @Input() rubriqueNumber: number;
  showComponent: boolean = true;

  constructor() {}

  ngOnInit(): void {
    // Initialize component
  }

  deleteComponent() {
    this.showComponent = false;
  }

  showSoumistvaComponent() {
    // Votre logique pour montrer le composant
  }
}
