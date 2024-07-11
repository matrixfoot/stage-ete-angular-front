import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
}

interface Contact {
  name: string;
  address: string;
  phone: string;
  email: string;
}

interface Invoice {
  invoiceNumber: string;
  date: string;  // Ajouté pour la date de création
  userId: string;
  clientInfo: Contact[];
  invoiceDetails: InvoiceItem[],
  terms: string,  
    notes: string
}

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent {
  invoice: Invoice = {
    invoiceNumber: '',
        date: new Date().toISOString().slice(0, 16),  // Initialisation avec la date actuelle
    userId: '',
    clientInfo: [
      { name: '', address: '', phone: '', email: '' },
      { name: '', address: '', phone: '', email: '' }
    ],
    invoiceDetails: [],
     terms: '',  
    notes: ''
  };

  totalHT: number = 0;
  tva: number = 0;
  totalTTC: number = 0;
   selectedFile: File | null = null;
  fileInputInvalid: boolean = false;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.fileInputInvalid = false;  // Reset the validation state
    } else {
      this.fileInputInvalid = true;  // Set validation state to true if no file is selected
    }
  }


  addItem() {
    this.invoice.invoiceDetails.push({ description: '', quantity: 0, unitPrice: 0 });
  }

  removeItem(index: number) {
    this.invoice.invoiceDetails.splice(index, 1);
    this.updateTotal();
  }

  updateTotal() {
    this.totalHT = this.invoice.invoiceDetails.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
    this.tva = this.totalHT * 0.20;
    this.totalTTC = this.totalHT + this.tva;
  }

  onSubmit(form: NgForm) {
    console.log(this.invoice);
    console.log('Total hors taxes:', this.totalHT);
    console.log('TVA:', this.tva);
    console.log('Total TTC:', this.totalTTC);
    // Logique pour générer le PDF ou enregistrer la facture
  }
}
