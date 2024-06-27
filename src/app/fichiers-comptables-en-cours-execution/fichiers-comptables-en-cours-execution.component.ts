import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fichiers-comptables-en-cours-execution',
  templateUrl: './fichiers-comptables-en-cours-execution.component.html',
  styleUrls: ['./fichiers-comptables-en-cours-execution.component.scss']
})
export class FichiersComptablesEnCoursExecutionComponent implements OnInit {
  fichiers = [
    {
      moisAnnee: 'Janvier 2023',
      prenomNom: 'Omar KAMMOUN',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-01-2023 10:00',
      dateModification: '02-01-2023 15:30'
    },
    {
      moisAnnee: 'Février 2023',
      prenomNom: 'Omar ABDELKADER',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-02-2023 10:00',
      dateModification: '02-02-2023 15:30'
    },
    {
      moisAnnee: 'Mars 2023',
      prenomNom: 'Nour HASNAOUI',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-03-2023 10:00',
      dateModification: '02-03-2023 15:30'
    },
    {
      moisAnnee: 'Avril 2023',
      prenomNom: 'Salma MHADHBI',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-04-2023 10:00',
      dateModification: '02-04-2023 15:30'
    },
    {
      moisAnnee: 'Mai 2023',
      prenomNom: 'Yassmine MAHJOUBI',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-05-2023 10:00',
      dateModification: '02-05-2023 15:30'
    },
    {
      moisAnnee: 'Juin 2023',
      prenomNom: 'Aymen BELHADJ',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-06-2023 10:00',
      dateModification: '02-06-2023 15:30'
    },
    {
      moisAnnee: 'Juillet 2023',
      prenomNom: 'Omar KAMMOUN',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-07-2023 10:00',
      dateModification: '02-07-2023 15:30'
    },
    {
      moisAnnee: 'Août 2023',
      prenomNom: 'Omar ABDELKADER',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-08-2023 10:00',
      dateModification: '02-08-2023 15:30'
    },
    {
      moisAnnee: 'Septembre 2023',
      prenomNom: 'Nour HASNAOUI',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-09-2023 10:00',
      dateModification: '02-09-2023 15:30'
    },
    {
      moisAnnee: 'Octobre 2023',
      prenomNom: 'Salma MHADHBI',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-10-2023 10:00',
      dateModification: '02-10-2023 15:30'
    },
    {
      moisAnnee: 'Novembre 2023',
      prenomNom: 'Yassmine MAHJOUBI',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-11-2023 10:00',
      dateModification: '02-11-2023 15:30'
    },
    {
      moisAnnee: 'Décembre 2023',
      prenomNom: 'Aymen BELHADJ',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-12-2023 10:00',
      dateModification: '02-12-2023 15:30'
    },
    {
      moisAnnee: 'Janvier 2024',
      prenomNom: 'Omar KAMMOUN',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-01-2024 10:00',
      dateModification: '02-01-2024 15:30'
    },
    {
      moisAnnee: 'Février 2024',
      prenomNom: 'Omar ABDELKADER',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-02-2024 10:00',
      dateModification: '02-02-2024 15:30'
    },
    {
      moisAnnee: 'Mars 2024',
      prenomNom: 'Nour HASNAOUI',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En attente',
      dateCreation: '01-03-2024 10:00',
      dateModification: '02-03-2024 15:30'
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
