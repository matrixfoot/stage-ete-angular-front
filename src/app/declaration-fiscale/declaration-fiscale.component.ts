import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-declaration-fiscale',
  templateUrl: './declaration-fiscale.component.html',
  styleUrls: ['./declaration-fiscale.component.scss']
})
export class DeclarationFiscaleComponent {
  
  checkboxStates: boolean[] = [false, false, false, false, false, false, false];

  constructor(private router: Router, private snackBar: MatSnackBar) {}
  selectedIndex: number = -1; 
  toggleCheck(index: number): void {
    
    // Reset all checkboxes and set the clicked one to true
    this.checkboxStates = this.checkboxStates.map((_, i) => i === index);
  
    // Clear localStorage before setting new item
    localStorage.removeItem('selectedDeclarationIndex');
    localStorage.setItem('selectedDeclarationIndex', index.toString());
    this.selectedIndex = index;
  }
  openSnackbar(message: string): void {
    this.snackBar.open(message, 'OK', {
      duration: 3000,
      panelClass: ['custom-snackbar']
    });
  }

  redirectToDeclaration(): void {
    // Find the index of the checked checkbox
    const selectedIndex = this.checkboxStates.findIndex(state => state);

    if (selectedIndex === -1) {
      this.openSnackbar('Veuillez sélectionner une option avant de continuer.');
    } else {
      // Navigate based on the selected index
      switch (selectedIndex) {
        case 0:
          this.router.navigate([ '/declamensuelle' ]);

         
          break;
        case 1:
          this.router.navigate( [ '/declamensuelle' ]);
          break;
        case 2:
          this.router.navigate(  [ '/declamensuelle' ]);
          break;
        case 3:
          this.router.navigate(['/declaration-employeur']);
          break;
        case 4:
          this.router.navigate(['/liasse-fiscale']);
          break;
        case 5:
          this.router.navigate(['/declaration-trimestrielle-achats']);
          break;
        case 6:
          this.router.navigate(['/declaration-trimestrielle-ventes']);
          break;
        default:
          // Handle default case or do nothing
          break;
      }
    }
  }
}