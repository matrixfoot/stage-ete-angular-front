import { Component, OnInit } from '@angular/core';
import { PdfExtractionService } from '../pdf-extraction.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import html2canvas from 'html2canvas'; 


@Component({
  selector: 'app-view-dec-fisc',
  templateUrl: './view-dec-fisc.component.html',
  styleUrls: ['./view-dec-fisc.component.scss']
})
export class ViewDecFiscComponent implements OnInit {
  

  constructor(private pdfExtractionService: PdfExtractionService) { }

  ngOnInit(): void {
     
  }
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
        let position = 0;

        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('declaration mensuelle.pdf'); // Generated PDF
      });
    }
  }   
  }

