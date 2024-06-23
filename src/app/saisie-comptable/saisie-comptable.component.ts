import { Component } from '@angular/core';

interface Salary {
  type: string;
  otherType?: string;
  matricule: string;
  nomPrenom: string;
  natureContrat: string;
  ficheContrat: string;
  salaireBrut: number;
  salaireNet: number;
}

@Component({
  selector: 'app-saisie-comptable',
  templateUrl: './saisie-comptable.component.html',
  styleUrls: ['./saisie-comptable.component.scss']
})
export class SaisieComptableComponent {
  step: number = 1;
  selectedYear: string | null = null;
  selectedMonth: string | null = null;
  selectedData: string | null = null;
  salaryType: string = '';

  years: number[] = [2020, 2021, 2022, 2023, 2024];
  months: string[] = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  dataList: { name: string, selected: boolean }[] = [
    { name: "Chiffre d'affaires", selected: false },
    { name: "Achats", selected: false },
    { name: "Banques", selected: false },
    { name: "Salaires", selected: false }
  ];

  salaries: Salary[] = [{
    type: '',
    matricule: '',
    nomPrenom: '',
    natureContrat: '',
    ficheContrat: '',
    salaireBrut: 0,
    salaireNet: 0
  }];

  onYearChange() {
    // Logique de changement d'année
  }

  onMonthChange() {
    if (this.selectedYear) {
      this.nextStep();
    }
  }

  onDataSelect(data: { name: string; selected: boolean }) {
    if (data.selected) {
      this.selectedData = data.name;
      this.nextStep();
    }
  }

  nextStep() {
    if (this.step < 3) {
      this.step++;
    }
  }

  addSalary() {
    this.salaries.push({
      type: '',
      matricule: '',
      nomPrenom: '',
      natureContrat: '',
      ficheContrat: '',
      salaireBrut: 0,
      salaireNet: 0
    });
  }

  deleteSalary(index: number) {
    this.salaries.splice(index, 1);
  }

  onSalaryTypeChange(index: number) {
    const salary = this.salaries[index];
    if (salary.type !== 'autre') {
      salary.otherType = '';
    }
  }

  reset() {
    this.step = 1; // Retour à la première étape
    this.selectedYear = null; // Réinitialiser l'année sélectionnée
    this.selectedMonth = null; // Réinitialiser le mois sélectionné
    this.selectedData = null; // Réinitialiser les données sélectionnées
    this.salaryType = ''; // Réinitialiser le type de salaire sélectionné
  
    // Réinitialiser les valeurs des salaires
    this.salaries = [{
      type: '',
      matricule: '',
      nomPrenom: '',
      natureContrat: '',
      ficheContrat: '',
      salaireBrut: 0,
      salaireNet: 0
    }];
  
    // Réinitialiser les données sélectionnées dans step 2
    this.dataList.forEach(item => item.selected = false);
  }
  
  calculateTotal(field: 'salaireBrut' | 'salaireNet'): number {
    let total = 0;
    for (const salary of this.salaries) {
      total += salary[field];
    }
    return total;
  }
  
  
}
