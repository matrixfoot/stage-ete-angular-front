import { Component } from '@angular/core';

@Component({
  selector: 'app-rubrique',
  templateUrl: './rubrique.component.html',
  styleUrls: ['./rubrique.component.scss']
})
export class RubriqueComponent {
  rubriqueCount: number = 1; // Compteur de rubrique, commence à 1
  showSoumistva: boolean = false; // Contrôle l'affichage du composant soumistva

  showSoumistvaComponent() {
    this.showSoumistva = true;
    this.rubriqueCount++; // Incrémente le compteur de rubrique à chaque ajout
  }
  
}
