import { Injectable } from '@angular/core';
import { getDocument, GlobalWorkerOptions, PDFDocumentProxy } from 'pdfjs-dist';

interface TextItem {
  str: string;
}

@Injectable({
  providedIn: 'root'
})
export class PdfExtractionService {

  constructor() {
    // Configure le worker en utilisant une URL spécifique
    GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.7.570/pdf.worker.min.js';
  }

  async extractDataFromPdf(pdfUrl: string): Promise<string[][]> {
    console.log(`Loading PDF from: ${pdfUrl}`);
    const loadingTask = getDocument(pdfUrl);
    const pdf: PDFDocumentProxy = await loadingTask.promise;
    const data: string[][] = [];

    console.log(`PDF loaded. Number of pages: ${pdf.numPages}`);

    // Itérer sur chaque page
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      const pageData: string[] = [];

      console.log(`Processing page ${pageNum}`);

      // Extraire les éléments de texte
      textContent.items.forEach(item => {
        const textItem = item as TextItem;
        pageData.push(textItem.str);
        console.log(`Text item: ${textItem.str}`);
      });

      data.push(pageData);
    }

    console.log('Data extraction complete:', data);
    return data;
  }
}
