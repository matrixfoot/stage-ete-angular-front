import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copies-declarations-fiscales-valides',
  templateUrl: './copies-declarations-fiscales-valides.component.html',
  styleUrls: ['./copies-declarations-fiscales-valides.component.scss']
})
export class CopiesDeclarationsFiscalesValidesComponent implements OnInit {
  declarations = [
    {
      code: 'D001',
      nature: 'Nature A',
      moisAnnee: 'Janvier 2023',
      prenomNom: 'Omar KAMMOUN',
      origine: 'Origine A',
      source: 'Source A',
      statutAdmin: 'Statut Admin A',
      statutCollaborateur: 'Statut Collaborateur A',
      dateCreation: '01-01-2023 10:00'
    },
    {
      code: 'D002',
      nature: 'Nature B',
      moisAnnee: 'Février 2023',
      prenomNom: 'Omar ABDELKADER',
      origine: 'Origine B',
      source: 'Source B',
      statutAdmin: 'Statut Admin B',
      statutCollaborateur: 'Statut Collaborateur B',
      dateCreation: '01-02-2023 10:00'
    },
    {
      code: 'D003',
      nature: 'Nature C',
      moisAnnee: 'Mars 2023',
      prenomNom: 'Nour HASNAOUI',
      origine: 'Origine C',
      source: 'Source C',
      statutAdmin: 'Statut Admin C',
      statutCollaborateur: 'Statut Collaborateur C',
      dateCreation: '01-03-2023 10:00'
    },
    {
      code: 'D004',
      nature: 'Nature D',
      moisAnnee: 'Avril 2023',
      prenomNom: 'Salma MHADHBI',
      origine: 'Origine D',
      source: 'Source D',
      statutAdmin: 'Statut Admin D',
      statutCollaborateur: 'Statut Collaborateur D',
      dateCreation: '01-04-2023 10:00'
    },
    {
      code: 'D005',
      nature: 'Nature E',
      moisAnnee: 'Mai 2023',
      prenomNom: 'Yassmine MAHJOUBI',
      origine: 'Origine E',
      source: 'Source E',
      statutAdmin: 'Statut Admin E',
      statutCollaborateur: 'Statut Collaborateur E',
      dateCreation: '01-05-2023 10:00'
    },
    {
      code: 'D006',
      nature: 'Nature F',
      moisAnnee: 'Juin 2023',
      prenomNom: 'Aymen BELHADJ',
      origine: 'Origine F',
      source: 'Source F',
      statutAdmin: 'Statut Admin F',
      statutCollaborateur: 'Statut Collaborateur F',
      dateCreation: '01-06-2023 10:00'
    },
    {
      code: 'D007',
      nature: 'Nature G',
      moisAnnee: 'Juillet 2023',
      prenomNom: 'Omar KAMMOUN',
      origine: 'Origine G',
      source: 'Source G',
      statutAdmin: 'Statut Admin G',
      statutCollaborateur: 'Statut Collaborateur G',
      dateCreation: '01-07-2023 10:00'
    },
    {
      code: 'D008',
      nature: 'Nature H',
      moisAnnee: 'Août 2023',
      prenomNom: 'Omar ABDELKADER',
      origine: 'Origine H',
      source: 'Source H',
      statutAdmin: 'Statut Admin H',
      statutCollaborateur: 'Statut Collaborateur H',
      dateCreation: '01-08-2023 10:00'
    },
    {
      code: 'D009',
      nature: 'Nature I',
      moisAnnee: 'Septembre 2023',
      prenomNom: 'Nour HASNAOUI',
      origine: 'Origine I',
      source: 'Source I',
      statutAdmin: 'Statut Admin I',
      statutCollaborateur: 'Statut Collaborateur I',
      dateCreation: '01-09-2023 10:00'
    },
    {
      code: 'D010',
      nature: 'Nature J',
      moisAnnee: 'Octobre 2023',
      prenomNom: 'Salma MHADHBI',
      origine: 'Origine J',
      source: 'Source J',
      statutAdmin: 'Statut Admin J',
      statutCollaborateur: 'Statut Collaborateur J',
      dateCreation: '01-10-2023 10:00'
    },
    {
      code: 'D011',
      nature: 'Nature K',
      moisAnnee: 'Novembre 2023',
      prenomNom: 'Yassmine MAHJOUBI',
      origine: 'Origine K',
      source: 'Source K',
      statutAdmin: 'Statut Admin K',
      statutCollaborateur: 'Statut Collaborateur K',
      dateCreation: '01-11-2023 10:00'
    },
    {
      code: 'D012',
      nature: 'Nature L',
      moisAnnee: 'Décembre 2023',
      prenomNom: 'Aymen BELHADJ',
      origine: 'Origine L',
      source: 'Source L',
      statutAdmin: 'Statut Admin L',
      statutCollaborateur: 'Statut Collaborateur L',
      dateCreation: '01-12-2023 10:00'
    },
    {
      code: 'D013',
      nature: 'Nature M',
      moisAnnee: 'Janvier 2024',
      prenomNom: 'Omar KAMMOUN',
      origine: 'Origine M',
      source: 'Source M',
      statutAdmin: 'Statut Admin M',
      statutCollaborateur: 'Statut Collaborateur M',
      dateCreation: '01-01-2024 10:00'
    },
    {
      code: 'D014',
      nature: 'Nature N',
      moisAnnee: 'Février 2024',
      prenomNom: 'Omar ABDELKADER',
      origine: 'Origine N',
      source: 'Source N',
      statutAdmin: 'Statut Admin N',
      statutCollaborateur: 'Statut Collaborateur N',
      dateCreation: '01-02-2024 10:00'
    },
    {
      code: 'D015',
      nature: 'Nature O',
      moisAnnee: 'Mars 2024',
      prenomNom: 'Nour HASNAOUI',
      origine: 'Origine O',
      source: 'Source O',
      statutAdmin: 'Statut Admin O',
      statutCollaborateur: 'Statut Collaborateur O',
      dateCreation: '01-03-2024 10:00'
    }
  ];

  currentPage = 1;
  pageSize = 8;
  totalDeclarations = 0;
  pages = [];
  totalPages = 0;

  ngOnInit() {
    this.totalDeclarations = this.declarations.length;
    this.totalPages = Math.ceil(this.totalDeclarations / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedDeclarations() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.declarations.slice(start, start + this.pageSize);
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
