import { Component } from '@angular/core';

@Component({
  selector: 'app-rub',
  templateUrl: './rub.component.html',
  styleUrls: ['./rub.component.scss']
})
export class RubComponent {
  showSoumistva: boolean = false; // Contrôle l'affichage du composant soumistva
  showSoumistvaa: boolean = false; // Contrôle l'affichage du composant soumistva
  rubriqueNumber: number;
  static rubriqueCount: number =2; // Commence à partir de 1 pour le premier élément
  showComponent: boolean = true;
  
  constructor() {
    this.rubriqueNumber = RubComponent.rubriqueCount;
    RubComponent.rubriqueCount++;
  }

  showSoumistvaComponent() {
    this.showSoumistva = true;
  }

  deleteRubrique() {
    this.showSoumistvaa = false; // Masque le composant lorsque supprimé
  }
  ngOnInit(): void {
    // Initialize component
  }

  deleteComponent() {
    this.showComponent = false;
  }
}
