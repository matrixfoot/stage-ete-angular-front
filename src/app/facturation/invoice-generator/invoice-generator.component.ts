import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import * as XLSX from 'xlsx';


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
  selector: 'app-invoice-generator',
  templateUrl: './invoice-generator.component.html',
  styleUrls: ['./invoice-generator.component.scss']
})
export class InvoiceGeneratorComponent {
  documentType: string = 'invoice';
   totalHT: number = 0;
  tva: number = 0;
  totalTTC: number = 0;
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

  constructor(private router: Router) { }
  ngOnInit() {
 this.invoices = this.loadInvoices();
}
loadInvoices() {
  const invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
  console.log('Loaded invoices:', invoices);
  return invoices;
}



  
  viewInvoice(index: number) {
    
    const selectedInvoice = this.invoices[index];
    this.generatePDF(selectedInvoice);
  }


  


  generateDocument() {
    console.log(this.documentType);
    this.router.navigate([this.documentType]);
  }


  calculateTotals(invoice: Invoice) {
    const totalHT = invoice.invoiceDetails.reduce((acc, item) => acc + (item.quantity * item.unitPrice), 0);
    const TVA_RATE = 0.20; // Exemple de taux de TVA (20%)
    const tva = totalHT * TVA_RATE;
    const totalTTC = totalHT + tva;
    return { totalHT, tva, totalTTC };
  }

generatePDF(invoice: Invoice) {
  const doc = new jsPDF();
  const margin = 10;
  const pageWidth = doc.internal.pageSize.getWidth();
  let cursorY = margin;

  // Calculer les totaux pour cette facture
  const { totalHT, tva, totalTTC } = this.calculateTotals(invoice);

  // Title
  doc.setFontSize(18);
  doc.text(`Facture N°: ${invoice.invoiceNumber}`, margin, cursorY);
  cursorY += 10;

  // Date
  doc.setFontSize(12);
  doc.text(`Date: ${invoice.date}`, margin, cursorY);
  cursorY += 10;

  // User ID
  doc.text(`Utilisateur ID: ${invoice.userId}`, margin, cursorY);
  cursorY += 10;

  // Client Info
  doc.setFontSize(14);
  doc.text('Client:', margin, cursorY);
  cursorY += 10;
  doc.setFontSize(12);
  invoice.clientInfo.forEach((client) => {
    doc.text(`Nom: ${client.name}`, margin, cursorY);
    cursorY += 5;
    doc.text(`Adresse: ${client.address}`, margin, cursorY);
    cursorY += 5;
    doc.text(`Téléphone: ${client.phone}`, margin, cursorY);
    cursorY += 5;
    doc.text(`Email: ${client.email}`, margin, cursorY);
    cursorY += 10;
  });

  // Invoice Details Table
  const invoiceDetails = invoice.invoiceDetails.map(item => [item.description, item.quantity, item.unitPrice.toString()]);
  autoTable(doc, {
    head: [['Description', 'Quantité', 'Prix Unitaire']],
    body: invoiceDetails,
    startY: cursorY,
    margin: { left: margin, right: margin }
  });
  cursorY = (doc as any).lastAutoTable.finalY + 10;

  // Totals
  doc.setFontSize(14);
  doc.text(`Total HT: ${totalHT.toFixed(2)}`, margin, cursorY);
  cursorY += 10;
  doc.text(`TVA: ${tva.toFixed(2)}`, margin, cursorY);
  cursorY += 10;
  doc.text(`Total TTC: ${totalTTC.toFixed(2)}`, margin, cursorY);

  // Create PDF URL and open in new window
  const pdfBlob = doc.output('blob');
  const pdfUrl = URL.createObjectURL(pdfBlob);
  window.open(pdfUrl, '_blank'); // Ouvrir dans un nouvel onglet
}

  
   generateExcel() {
  const workbook: XLSX.WorkBook = { Sheets: {}, SheetNames: [] };

  // Iterate over each invoice and create a sheet for each
  this.invoices.forEach((invoice, index) => {
    const headers = ['Numéro de Facture', 'Date', 'Utilisateur ID', 'Nom du Client', 'Adresse', 'Téléphone', 'Email', 'Description', 'Quantité', 'Prix Unitaire'];
    const data: any[][] = [];
    
    // Add headers to the first row
    data.push(headers);
    
    // Add invoice details to the sheet
    invoice.invoiceDetails.forEach(detail => {
      invoice.clientInfo.forEach(client => {
        const row = [
          invoice.invoiceNumber,
          invoice.date,
          invoice.userId,
          client.name || 'N/A',
          client.address || 'N/A',
          client.phone || 'N/A',
          client.email || 'N/A',
          detail.description || 'N/A',
          detail.quantity || 0,
          detail.unitPrice || 0
        ];
        data.push(row);
      });
    });
    
    // Convert data to a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    
    // Generate a unique sheet name
    const sheetName = `Facture_${invoice.invoiceNumber}_${Date.now()}`;
    workbook.SheetNames.push(sheetName);
    workbook.Sheets[sheetName] = worksheet;
  });

  // Write the workbook to a file
  XLSX.writeFile(workbook, 'factures.xlsx');
}




}
