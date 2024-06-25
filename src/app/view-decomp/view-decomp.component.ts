import { Component } from '@angular/core';

import * as XLSX from 'xlsx';

import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import html2canvas from 'html2canvas'; 


@Component({
  selector: 'app-view-decomp',
  templateUrl: './view-decomp.component.html',
  styleUrls: ['./view-decomp.component.scss']
})
export class ViewDecompComponent {

  generatePDF() {
    const data = document.getElementById('contentToConvert'); // Id of the table
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 210; // Width in mm for A4 size
        const pageHeight = 297; // Height in mm for A4 size
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
        let position = 0;

        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('MYPdf.pdf'); // Generated PDF
      });
    }
  }
   generatePDF2() {
    const data = document.getElementById('fichierA'); // Id of the table
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 210; // Width in mm for A4 size
        const pageHeight = 297; // Height in mm for A4 size
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF

        // Add custom font
        const fontPath = '../../assets/fonts/Amiri-Regular.ttf';
        pdf.addFileToVFS('Amiri-Regular.ttf', fontPath);
        pdf.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');
        pdf.setFont('Amiri');
        pdf.setLanguage('ar');
        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0);

        let position = 0;

        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('MYPdf_Arabic.pdf'); // Generated PDF with Arabic font
      });
    }
   }
  
   generateExcel(): void {
     const integrationData = [
      ['code', 'journal', 'date', 'prefixe', 'numeropiece', 'libelle', 'reflettrage', 'numeroexterne', 'compte', 'sens', 'montant'],
      ['F6T', '', '01/01/2022', '202201', '1', 'Facture N° 1', '1', '1', '46100000', 'C', '152'],
      ['F6T', '', '01/01/2022', '202201', '1', 'Facture N° 1', '1', '1', '46100000', 'C', '19,76'],
      ['F6T', '', '01/01/2022', '202201', '1', 'Facture N° 1', '1', '1', '46100000', 'C', '19,76'],
      ['F6T', '', '01/01/2022', '202201', '1', 'Facture N° 1', '1', '1', '46100000', 'C', '0,6'],
      ['F6T', '', '01/01/2022', '202201', '1', 'Facture N° 1', '1', '1', '46100000', 'D', '172,36']
    ];

    // Données pour la feuille "CA (note horraire)"
    const caData = [
      ['type', 'numeropiece', 'jour', 'date', 'typepiece', 'devise', 'montanthtexpdevise', 'numeronote', 'montantht', 'montantht19', 'montantht13', 'montanthtexo', 'montanthtsus', 'montanthtexp', 'montanttva', 'montanttva19'],
      ['1', '1', '1', '01/01/2022', 'facture', 'euro', '0', '1', '0', '0', '152', '0', '0', '0', '19,76', '0']
    ];
     const Data1 = [];
     const Data2 = [];
     const Data3 = [];
     const Data4 = [];
     const Data5 = [];

    // Création du workbook
    const wb = XLSX.utils.book_new();

    // Création des feuilles
    const ws1 = XLSX.utils.aoa_to_sheet(integrationData);
    const ws2 = XLSX.utils.aoa_to_sheet(caData);
    const ws3 = XLSX.utils.aoa_to_sheet(Data1);
    const ws4 = XLSX.utils.aoa_to_sheet(Data2);
    const ws5 = XLSX.utils.aoa_to_sheet(Data3);
    const ws6 = XLSX.utils.aoa_to_sheet(Data4);
    const ws7 = XLSX.utils.aoa_to_sheet(Data5);

    // Ajout des feuilles au workbook
    XLSX.utils.book_append_sheet(wb, ws1, 'Integration');
    XLSX.utils.book_append_sheet(wb, ws2, 'CA (note horraire)');
    XLSX.utils.book_append_sheet(wb, ws3, ' recette');
    XLSX.utils.book_append_sheet(wb, ws4, 'acture achat');
    XLSX.utils.book_append_sheet(wb, ws5, 'elevé manuelle');
    XLSX.utils.book_append_sheet(wb, ws6, 'elevé document joint');
    XLSX.utils.book_append_sheet(wb, ws7, ' traitement des salaires');

    // Génération du blob Excel
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });

    // Téléchargement du fichier Excel
    const filename = 'donnees.xlsx';
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

}
  
  


