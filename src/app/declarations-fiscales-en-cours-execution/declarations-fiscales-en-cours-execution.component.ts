import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-declarations-fiscales-en-cours-execution',
  templateUrl: './declarations-fiscales-en-cours-execution.component.html',
  styleUrls: ['./declarations-fiscales-en-cours-execution.component.scss']
})
export class DeclarationsFiscalesEnCoursExecutionComponent implements OnInit {
  declarations = [
    {
      code: 'D001',
      nature: 'Nature A',
      moisAnnee: 'Janvier 2023',
      prenomNom: 'Omar KAMMOUN',
      origine: 'Origine A',
      statutAdmin: 'Statut Admin A',
      statutCollaborateur: 'Statut Collaborateur A',
      dateCreation: '01-01-2023 10:00',
      dateModification: '02-01-2023 12:00',
      affecteA: 'John Smith'
    },
    {
      code: 'D002',
      nature: 'Nature B',
      moisAnnee: 'Février 2023',
      prenomNom: 'Omar ABDELKADER',
      origine: 'Origine B',
      statutAdmin: 'Statut Admin B',
      statutCollaborateur: 'Statut Collaborateur B',
      dateCreation: '01-02-2023 10:00',
      dateModification: '02-02-2023 12:00',
      affecteA: 'Jane Doe'
    },
    {
      code: 'D003',
      nature: 'Nature C',
      moisAnnee: 'Mars 2023',
      prenomNom: 'Nour HASNAOUI',
      origine: 'Origine C',
      statutAdmin: 'Statut Admin C',
      statutCollaborateur: 'Statut Collaborateur C',
      dateCreation: '01-03-2023 10:00',
      dateModification: '02-03-2023 12:00',
      affecteA: 'Bob Smith'
    },
    {
      code: 'D004',
      nature: 'Nature D',
      moisAnnee: 'Avril 2023',
      prenomNom: 'Salma MHADHBI',
      origine: 'Origine D',
      statutAdmin: 'Statut Admin D',
      statutCollaborateur: 'Statut Collaborateur D',
      dateCreation: '01-04-2023 10:00',
      dateModification: '02-04-2023 12:00',
      affecteA: 'Alice Johnson'
    },
    {
      code: 'D005',
      nature: 'Nature E',
      moisAnnee: 'Mai 2023',
      prenomNom: 'Yassmine MAHJOUBI',
      origine: 'Origine E',
      statutAdmin: 'Statut Admin E',
      statutCollaborateur: 'Statut Collaborateur E',
      dateCreation: '01-05-2023 10:00',
      dateModification: '02-05-2023 12:00',
      affecteA: 'John Doe'
    },
    {
      code: 'D006',
      nature: 'Nature F',
      moisAnnee: 'Juin 2023',
      prenomNom: 'Aymen BELHADJ',
      origine: 'Origine F',
      statutAdmin: 'Statut Admin F',
      statutCollaborateur: 'Statut Collaborateur F',
      dateCreation: '01-06-2023 10:00',
      dateModification: '02-06-2023 12:00',
      affecteA: 'Jane Smith'
    },
    {
      code: 'D007',
      nature: 'Nature G',
      moisAnnee: 'Juillet 2023',
      prenomNom: 'Omar KAMMOUN',
      origine: 'Origine G',
      statutAdmin: 'Statut Admin G',
      statutCollaborateur: 'Statut Collaborateur G',
      dateCreation: '01-07-2023 10:00',
      dateModification: '02-07-2023 12:00',
      affecteA: 'Bob Johnson'
    },
    {
      code: 'D008',
      nature: 'Nature H',
      moisAnnee: 'Août 2023',
      prenomNom: 'Omar ABDELKADER',
      origine: 'Origine H',
      statutAdmin: 'Statut Admin H',
      statutCollaborateur: 'Statut Collaborateur H',
      dateCreation: '01-08-2023 10:00',
      dateModification: '02-08-2023 12:00',
      affecteA: 'Alice Doe'
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
