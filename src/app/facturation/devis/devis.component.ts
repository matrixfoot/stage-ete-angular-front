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
  notes: string,
     validityDate: string,
  
}

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent {


   invoice: Invoice = {
    invoiceNumber: '',
        date: new Date().toISOString().slice(0, 16),  // Initialisation avec la date actuelle
     userId: '',
     validityDate: '',
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







 

