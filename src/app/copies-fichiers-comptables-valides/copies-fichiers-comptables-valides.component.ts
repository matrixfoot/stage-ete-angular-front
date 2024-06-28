import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copies-fichiers-comptables-valides',
  templateUrl: './copies-fichiers-comptables-valides.component.html',
  styleUrls: ['./copies-fichiers-comptables-valides.component.scss']
})
export class CopiesFichiersComptablesValidesComponent implements OnInit {
  fichiers = [
    {
      moisAnnee: 'Janvier 2023',
      prenomNom: 'Omar KAMMOUN',
      source: 'Source A',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-01-2023 10:00'
    },
    {
      moisAnnee: 'Février 2023',
      prenomNom: 'Omar ABDELKADER',
      source: 'Source B',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-02-2023 10:00'
    },
    {
      moisAnnee: 'Mars 2023',
      prenomNom: 'Nour HASNAOUI',
      source: 'Source C',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-03-2023 10:00'
    },
    {
      moisAnnee: 'Avril 2023',
      prenomNom: 'Salma MHADHBI',
      source: 'Source D',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-04-2023 10:00'
    },
    {
      moisAnnee: 'Mai 2023',
      prenomNom: 'Yassmine MAHJOUBI',
      source: 'Source E',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-05-2023 10:00'
    },
    {
      moisAnnee: 'Juin 2023',
      prenomNom: 'Aymen BELHADJ',
      source: 'Source F',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-06-2023 10:00'
    },
    {
      moisAnnee: 'Juillet 2023',
      prenomNom: 'Omar KAMMOUN',
      source: 'Source A',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-07-2023 10:00'
    },
    {
      moisAnnee: 'Août 2023',
      prenomNom: 'Omar ABDELKADER',
      source: 'Source B',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-08-2023 10:00'
    },
    {
      moisAnnee: 'Septembre 2023',
      prenomNom: 'Nour HASNAOUI',
      source: 'Source C',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-09-2023 10:00'
    },
    {
      moisAnnee: 'Octobre 2023',
      prenomNom: 'Salma MHADHBI',
      source: 'Source D',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-10-2023 10:00'
    },
    {
      moisAnnee: 'Novembre 2023',
      prenomNom: 'Yassmine MAHJOUBI',
      source: 'Source E',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-11-2023 10:00'
    },
    {
      moisAnnee: 'Décembre 2023',
      prenomNom: 'Aymen BELHADJ',
      source: 'Source F',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-12-2023 10:00'
    },
    {
      moisAnnee: 'Janvier 2024',
      prenomNom: 'Omar KAMMOUN',
      source: 'Source A',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-01-2024 10:00'
    },
    {
      moisAnnee: 'Février 2024',
      prenomNom: 'Omar ABDELKADER',
      source: 'Source B',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-02-2024 10:00'
    },
    {
      moisAnnee: 'Mars 2024',
      prenomNom: 'Nour HASNAOUI',
      source: 'Source C',
      statutAdmin: 'Validé',
      statutCollaborateur: 'Validé',
      dateCreation: '01-03-2024 10:00'
    }
  ];

  currentPage = 1;
  pageSize = 8;
  totalFichiers = 0;
  pages = [];
  totalPages = 0;

  ngOnInit() {
    this.totalFichiers = this.fichiers.length;
    this.totalPages = Math.ceil(this.totalFichiers / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedFichiers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.fichiers.slice(start, start + this.pageSize);
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
