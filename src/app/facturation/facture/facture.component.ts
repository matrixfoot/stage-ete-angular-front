import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


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
  currency: string;
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
  currentlang = "fr";

  invoice: Invoice = {
    invoiceNumber: '',
    date: new Date().toISOString().slice(0, 16),  // Initialisation avec la date actuelle
    userId: '',
    currency: 'DT',
    clientInfo: [
      { name: '', address: '', phone: '', email: '' },
      { name: '', address: '', phone: '', email: '' }
    ],
    invoiceDetails: [],
    terms: '',
    notes: ''
  };
  invoices: Invoice[] = [];

  totalHT: number = 0;
  tva: number = 0;
  tva2: number = 0;
  totalTTC: number = 0;
  selectedFile: File | null = null;
  fileInputInvalid: boolean = false;



  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }


  ngOnInit() {
    this.invoices = this.loadInvoices();
  }

  generatePDF() {
    const data = document.getElementById('invoice')!;
    html2canvas(data).then(canvas => {
      const imgWidth = 190;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const pdf = new jsPDF('p', 'mm', 'a4');
      let position = 10; // One inch margin

      pdf.addImage(canvas, 'PNG', 10, position, imgWidth, imgHeight);
      pdf.save('invoice.pdf');
    });
  }
  
  saveInvoice() {
    const invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
    invoices.push(this.invoice);
    localStorage.setItem('invoices', JSON.stringify(invoices));
    this.invoices = invoices; // Update the local list of invoices
    console.log('Invoice saved');
  }

  loadInvoices() {
    const invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
    console.log('Loaded invoices:', invoices);
    return invoices;
  }

  deleteInvoice(index: number) {
    this.invoices.splice(index, 1);
    localStorage.setItem('invoices', JSON.stringify(this.invoices));
    console.log('Invoice deleted');
  }

  
  

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
    this.tva2 = this.totalHT * this.tva;
    this.totalTTC = this.totalHT + this.tva2;
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentlang = language;
  }


  onSubmit(form: NgForm) {
    if (form.valid) {
      this.saveInvoice();
      this.invoice = {
        invoiceNumber: '',
        date: new Date().toISOString().slice(0, 16),
        userId: '',
        currency: 'DT',
        clientInfo: [
          { name: '', address: '', phone: '', email: '' },
          { name: '', address: '', phone: '', email: '' }
        ],
        invoiceDetails: [],
        terms: '',
        notes: ''
      };
      this.updateTotal();
    }
  }
}
