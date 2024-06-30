import { Component } from '@angular/core';

interface DemandeService {
  libelle: string;
  description: string;
  duree: number;
  total_honoraire: number;
  etat: string;
  statut: string; // Changed 'Statut' to 'statut'
}
@Component({
  selector: 'app-view-autre-ds',
  templateUrl: './view-autre-ds.component.html',
  styleUrls: ['./view-autre-ds.component.scss']
})
export class ViewAutreDsComponent {

  orderServiceList: DemandeService[] = [
    {
      libelle: 'CONTACTER LE CLIENT',
      description: 'VSVSVSR',
      duree: 5,
      total_honoraire: 11.500,
      etat: 'Soumis',
      statut: 'Non réglé' // Corrected 'Statut' to 'statut'
    },
  ];

  constructor() {}
}
