import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-affichage-form',
  templateUrl: './affichage-form.component.html',
  styleUrls: ['./affichage-form.component.scss']
})
export class AffichageFormComponent {
   constructor(private router: Router,private location: Location) {}
  onCheckboxChange(event: any) {
    if (event.checked) {
      this.router.navigate(['/affForm']);
    }
  }
  onCheckboxChange2(event: any) {
    if (event.checked) {
      this.router.navigate(['/inclureP']);
    }
  }
  goBack() {
    this.location.back();
  }

}




  