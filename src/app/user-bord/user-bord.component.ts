import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-bord',
  templateUrl: './user-bord.component.html',
  styleUrls: ['./user-bord.component.scss']
})
export class UserBordComponent {
  isColumn1Enlarged = false;
  isColumn2Enlarged = false;

  toggleColumn1() {
    console.log('Column 1 clicked');
    this.isColumn1Enlarged = !this.isColumn1Enlarged;
    if (this.isColumn1Enlarged) {
      this.isColumn2Enlarged = false; // Ensure only one column is enlarged at a time
    }
  }

  toggleColumn2() {
    console.log('Column 2 clicked');
    this.isColumn2Enlarged = !this.isColumn2Enlarged;
    if (this.isColumn2Enlarged) {
      this.isColumn1Enlarged = false; // Ensure only one column is enlarged at a time
    }
  }
 
  constructor(private router: Router) { }

  goToFiscality() {
    this.router.navigate(['/fisc']);
  }




}
