import { Component } from '@angular/core';

@Component({
  selector: 'app-plustva',
  templateUrl: './plustva.component.html',
  styleUrls: ['./plustva.component.scss']
})
export class PlustvaComponent {
  showSoumistva: boolean = false; // Contrôle l'affichage du composant soumistva

  showSoumistvaComponent() {
    this.showSoumistva = true;
  }
}
