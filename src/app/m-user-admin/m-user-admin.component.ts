import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-user-admin',
  templateUrl: './m-user-admin.component.html',
  styleUrls: ['./m-user-admin.component.scss']
})
export class MUserAdminComponent {
  constructor(private router: Router) {}
  onCheckboxChange(event: any) {
    if (event.checked) {
      this.router.navigate(['/inclureP']);
    }
  }

}




