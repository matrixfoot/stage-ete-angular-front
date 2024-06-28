import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidatures-validees',
  templateUrl: './candidatures-validees.component.html',
  styleUrls: ['./candidatures-validees.component.scss']
})
export class CandidaturesValideesComponent implements OnInit {
  candidatures = [
    {
      email: 'omar.kammoun@example.com',
      prenomNom: 'Omar KAMMOUN',
      adresse: '123 Rue de Exemple, Tunis, Tunisie',
      mobile: '+216 22 123 456',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      cv: 'https://example.com/omar-kammoun-cv.pdf',
      dateCreation: '01-01-2023 10:00'
    },
    {
      email: 'omar.abdelkader@example.com',
      prenomNom: 'Omar ABDELKADER',
      adresse: '456 Rue de Exemple, Tunis, Tunisie',
      mobile: '+216 22 456 789',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      cv: 'https://example.com/omar-abdelkader-cv.pdf',
      dateCreation: '02-01-2023 10:00'
    },
    {
      email: 'nour.hasnaoui@example.com',
      prenomNom: 'Nour HASNAOUI',
      adresse: '789 Rue de Exemple, Tunis, Tunisie',
      mobile: '+216 22 789 123',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      cv: 'https://example.com/nour-hasnaoui-cv.pdf',
      dateCreation: '03-01-2023 10:00'
    },
    {
      email: 'salma.mhadhbi@example.com',
      prenomNom: 'Salma MHADHBI',
      adresse: '987 Rue de Exemple, Tunis, Tunisie',
      mobile: '+216 22 987 654',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      cv: 'https://example.com/salma-mhadhbi-cv.pdf',
      dateCreation: '04-01-2023 10:00'
    },
    {
      email: 'yassmine.mahjoubi@example.com',
      prenomNom: 'Yassmine MAHJOUBI',
      adresse: '654 Rue de Exemple, Tunis, Tunisie',
      mobile: '+216 22 654 321',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      cv: 'https://example.com/yassmine-mahjoubi-cv.pdf',
      dateCreation: '05-01-2023 10:00'
    },
    {
      email: 'aymen.belhadj@example.com',
      prenomNom: 'Aymen BELHADJ',
      adresse: '321 Rue de Exemple, Tunis, Tunisie',
      mobile: '+216 22 321 654',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      cv: 'https://example.com/aymen-belhadj-cv.pdf',
      dateCreation: '06-01-2023 10:00'
    },
    {
      email: 'omar.kammoun@example.com',
      prenomNom: 'Omar KAMMOUN',
      adresse: '123 Rue de Exemple, Tunis, Tunisie',
      mobile: '+216 22 123 456',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      cv: 'https://example.com/omar-kammoun-cv.pdf',
      dateCreation: '01-01-2024 10:00'
    },
    {
      email: 'omar.abdelkader@example.com',
      prenomNom: 'Omar ABDELKADER',
      adresse: '456 Rue de Exemple, Tunis, Tunisie',
      mobile: '+216 22 456 789',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      cv: 'https://example.com/omar-abdelkader-cv.pdf',
      dateCreation: '02-01-2024 10:00'
    },
    {
      email: 'nour.hasnaoui@example.com',
      prenomNom: 'Nour HASNAOUI',
      adresse: '789 Rue de Exemple, Tunis, Tunisie',
      mobile: '+216 22 789 123',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      cv: 'https://example.com/nour-hasnaoui-cv.pdf',
      dateCreation: '03-01-2024 10:00'
    }
  ];

  currentPage = 1;
  pageSize = 8;
  totalCandidatures = 0;
  pages = [];
  totalPages = 0;

  ngOnInit() {
    this.totalCandidatures = this.candidatures.length;
    this.totalPages = Math.ceil(this.totalCandidatures / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedCandidatures() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.candidatures.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
