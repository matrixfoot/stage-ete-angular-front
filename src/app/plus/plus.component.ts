import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss']
})
export class PlusComponent implements OnInit {
  showListComponent: boolean = false;

  constructor() {}

  ngOnInit() {
    // Initialize component
  }

  storeLastChoice() {
    // Retrieve last selected choice from localStorage
    const lastSelectedChoice = localStorage.getItem('selectedChoice');

    // Check if there's already a stored array or container in localStorage
    let storedChoices = JSON.parse(localStorage.getItem('storedChoices') || '[]');

    // Add the last selected choice to the stored choices array
    storedChoices.push(lastSelectedChoice);

    // Update localStorage with the new stored choices
    localStorage.setItem('storedChoices', JSON.stringify(storedChoices));

    // Optionally, you can set a flag to show a list or perform other actions
    this.showListComponent = true;
  }
}