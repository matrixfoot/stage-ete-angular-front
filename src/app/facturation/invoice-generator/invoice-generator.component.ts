import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-generator',
  templateUrl: './invoice-generator.component.html',
  styleUrls: ['./invoice-generator.component.scss']
})
export class InvoiceGeneratorComponent {
  documentType: string = 'invoice';

  constructor(private router: Router) {}

  generateDocument() {
    console.log(this.documentType);
    this.router.navigate([this.documentType]);
  }
}
