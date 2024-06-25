import { Component, OnInit, HostListener } from '@angular/core';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  selectedChoice: string = '';
  showChoicesContainer: boolean = true;
  showPartieCommune: boolean = true; // Variable de contrôle pour afficher partiecommune une seule fois
  availableChoices: { value: string, label: string }[] = [
    { value: 'option1', label: 'Traitement et salaire' },
    { value: 'option2', label: 'Loyers, commissions, courtages et vacations' },
    { value: 'option3', label: 'Horaires' },
    { value: 'option4', label: 'Montants supérieurs à 1000 dt' },
    { value: 'option5', label: 'Autre' }
  ];

  constructor(private selectionService: SelectionService) {}
 
  ngOnInit() {
    // Check sessionStorage for marker
    const isFirstLoad = sessionStorage.getItem('firstLoad');

    if (isFirstLoad === null) {
      // First time loading after refresh
      this.showPartieCommune = true; // Show partiecommune
      sessionStorage.setItem('firstLoad', 'true'); // Set marker in sessionStorage
    } else {
      // Subsequent reloads
      this.showPartieCommune = false; // Hide partiecommune
    }

    // Filter choices based on stored selections
    this.filterChoices();
  }
  @HostListener('window:beforeunload', ['$event'])
  clearLocalStorage(event: any) {
    localStorage.clear(); // Clear all items from localStorage
  }

  filterChoices() {
    // Retrieve stored choices from localStorage
    const storedChoices = JSON.parse(localStorage.getItem('storedChoices') || '[]');

    // Filter out stored choices from availableChoices
    this.availableChoices = this.availableChoices.filter(choice => {
      return !storedChoices.includes(choice.value);
    });
  }

  onChoiceChange(event: any) {
    this.selectedChoice = event.target.value;

    // Store selected choice in localStorage
    localStorage.setItem('selectedChoice', this.selectedChoice);

    // Update service or perform additional actions if needed
    this.selectionService.addChoice(this.selectedChoice);
  }

  toggleChoicesContainer() {
    this.showChoicesContainer = !this.showChoicesContainer;
  }
  hidePartieCommune() {
    this.showPartieCommune = false;
  }
}