import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fichiers-comptables-valides',
  templateUrl: './fichiers-comptables-valides.component.html',
  styleUrls: ['./fichiers-comptables-valides.component.scss']
})
export class FichiersComptablesValidesComponent implements OnInit {
  fichiers = [
    {
      moisAnnee: 'Janvier 2023',
      prenomNom: 'Omar KAMMOUN',
      source: 'Source A',
      statutAdmin: 'Statut Admin A',
      statutCollaborateur: 'Statut Collaborateur A',
      dateCreation: '01-01-2023 10:00'
    },
    {
      moisAnnee: 'Février 2023',
      prenomNom: 'Omar ABDELKADER',
      source: 'Source B',
      statutAdmin: 'Statut Admin B',
      statutCollaborateur: 'Statut Collaborateur B',
      dateCreation: '01-02-2023 10:00'
    },
    {
      moisAnnee: 'Mars 2023',
      prenomNom: 'Nour HASNAOUI',
      source: 'Source C',
      statutAdmin: 'Statut Admin C',
      statutCollaborateur: 'Statut Collaborateur C',
      dateCreation: '01-03-2023 10:00'
    },
    {
      moisAnnee: 'Avril 2023',
      prenomNom: 'Salma MHADHBI',
      source: 'Source D',
      statutAdmin: 'Statut Admin D',
      statutCollaborateur: 'Statut Collaborateur D',
      dateCreation: '01-04-2023 10:00'
    },
    {
      moisAnnee: 'Mai 2023',
      prenomNom: 'Yassmine MAHJOUBI',
      source: 'Source E',
      statutAdmin: 'Statut Admin E',
      statutCollaborateur: 'Statut Collaborateur E',
      dateCreation: '01-05-2023 10:00'
    },
    {
      moisAnnee: 'Juin 2023',
      prenomNom: 'Aymen BELHADJ',
      source: 'Source F',
      statutAdmin: 'Statut Admin F',
      statutCollaborateur: 'Statut Collaborateur F',
      dateCreation: '01-06-2023 10:00'
    },
    {
      moisAnnee: 'Juillet 2023',
      prenomNom: 'Omar KAMMOUN',
      source: 'Source G',
      statutAdmin: 'Statut Admin G',
      statutCollaborateur: 'Statut Collaborateur G',
      dateCreation: '01-07-2023 10:00'
    },
    {
      moisAnnee: 'Août 2023',
      prenomNom: 'Omar ABDELKADER',
      source: 'Source H',
      statutAdmin: 'Statut Admin H',
      statutCollaborateur: 'Statut Collaborateur H',
      dateCreation: '01-08-2023 10:00'
    },
    {
      moisAnnee: 'Septembre 2023',
      prenomNom: 'Nour HASNAOUI',
      source: 'Source I',
      statutAdmin: 'Statut Admin I',
      statutCollaborateur: 'Statut Collaborateur I',
      dateCreation: '01-09-2023 10:00'
    },
    {
      moisAnnee: 'Octobre 2023',
      prenomNom: 'Salma MHADHBI',
      source: 'Source J',
      statutAdmin: 'Statut Admin J',
      statutCollaborateur: 'Statut Collaborateur J',
      dateCreation: '01-10-2023 10:00'
    },
    {
      moisAnnee: 'Novembre 2023',
      prenomNom: 'Yassmine MAHJOUBI',
      source: 'Source K',
      statutAdmin: 'Statut Admin K',
      statutCollaborateur: 'Statut Collaborateur K',
      dateCreation: '01-11-2023 10:00'
    },
    {
      moisAnnee: 'Décembre 2023',
      prenomNom: 'Aymen BELHADJ',
      source: 'Source L',
      statutAdmin: 'Statut Admin L',
      statutCollaborateur: 'Statut Collaborateur L',
      dateCreation: '01-12-2023 10:00'
    },
    {
      moisAnnee: 'Janvier 2024',
      prenomNom: 'Omar KAMMOUN',
      source: 'Source M',
      statutAdmin: 'Statut Admin M',
      statutCollaborateur: 'Statut Collaborateur M',
      dateCreation: '01-01-2024 10:00'
    },
    {
      moisAnnee: 'Février 2024',
      prenomNom: 'Omar ABDELKADER',
      source: 'Source N',
      statutAdmin: 'Statut Admin N',
      statutCollaborateur: 'Statut Collaborateur N',
      dateCreation: '01-02-2024 10:00'
    },
    {
      moisAnnee: 'Mars 2024',
      prenomNom: 'Nour HASNAOUI',
      source: 'Source O',
      statutAdmin: 'Statut Admin O',
      statutCollaborateur: 'Statut Collaborateur O',
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
