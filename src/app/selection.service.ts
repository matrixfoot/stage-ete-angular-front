import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  private storageKey = 'selectedChoices';

  addChoice(choice: string) {
    let choices = this.getChoices();
    if (!choices.includes(choice)) {
      choices.push(choice);
      localStorage.setItem(this.storageKey, JSON.stringify(choices));
    }
  }

  getChoices(): string[] {
    const storedChoices = localStorage.getItem(this.storageKey);
    return storedChoices ? JSON.parse(storedChoices) : [];
  }

  clearChoices() {
    localStorage.removeItem(this.storageKey);
  }
}