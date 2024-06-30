import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-declarationmensuelle',
  templateUrl: './declarationmensuelle.component.html',
  styleUrls: ['./declarationmensuelle.component.scss']
})
export class DeclarationmensuelleComponent implements OnInit {

  selectedIndex: number;
  checkboxStates: boolean[] = [false, false, false, false, false, false, false];
  labels: string[] = [
    'Déclaration Mensuelle',
    'Acomptes provisionnels',
    'Déclaration annuelle (I/R ou I/S)',
    'Déclaration de l\'employeur',
    'Liasse fiscale',
    'Déclaration trimestrielle des achats en suspension de T.V.A',
    'Déclaration trimestrielle des ventes en suspension des taxes sur le chiffre d\'affaires'
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve selected index from localStorage
    const storedIndex = localStorage.getItem('selectedDeclarationIndex');
    this.selectedIndex = storedIndex ? +storedIndex : -1;

    // Set checkbox state based on stored index
    if (this.selectedIndex !== -1) {
      this.checkboxStates[this.selectedIndex] = true;
    }
  }

  getLabel(index: number): string {
    return this.labels[index];
  }
  years: number[] = [2021, 2022, 2023, 2024];
  // Liste des mois de l'année
  months: { name: string, value: number }[] = [
    { name: 'Janvier', value: 1 },
    { name: 'Février', value: 2 },
    { name: 'Mars', value: 3 },
    { name: 'Avril', value: 4 },
    { name: 'Mai', value: 5 },
    { name: 'Juin', value: 6 },
    { name: 'Juillet', value: 7 },
    { name: 'Août', value: 8 },
    { name: 'Septembre', value: 9 },
    { name: 'Octobre', value: 10 },
    { name: 'Novembre', value: 11 },
    { name: 'Décembre', value: 12 }
  ];

  // Variables pour stocker les choix sélectionnés
  selectedYear: number = this.years[0]; // Sélectionner la première année par défaut
  selectedMonth: number = this.months[0].value; // Sélectionner le premier mois par défaut
}