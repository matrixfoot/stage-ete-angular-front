import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dossiers-instance',
  templateUrl: './dossiers-instance.component.html',
  styleUrls: ['./dossiers-instance.component.scss']
})
export class DossiersInstanceComponent implements OnInit {
  dossiers = [
    {
      nom: 'Omar KAMMOUN',
      raisonSociale: 'Société A',
      de: '',
      moisAnnee: 'Janvier 2023',
      type: 'Type A',
      origine: 'Origine A',
      statut: 'Statut A',
      dateCreation: '01-01-2023',
      dateModification: '02-01-2023'
    },
    {
      nom: 'Omar ABDELKADER',
      raisonSociale: 'Société B',
      de: '',
      moisAnnee: 'Février 2023',
      type: 'Type B',
      origine: 'Origine B',
      statut: 'Statut B',
      dateCreation: '01-02-2023',
      dateModification: '02-02-2023'
    },
    {
      nom: 'Nour HASNAOUI',
      raisonSociale: 'Société C',
      de: '',
      moisAnnee: 'Mars 2023',
      type: 'Type C',
      origine: 'Origine C',
      statut: 'Statut C',
      dateCreation: '01-03-2023',
      dateModification: '02-03-2023'
    },
    {
      nom: 'Yassmine MAHJOUBI',
      raisonSociale: 'Société D',
      de: '',
      moisAnnee: 'Avril 2023',
      type: 'Type D',
      origine: 'Origine D',
      statut: 'Statut D',
      dateCreation: '01-04-2023',
      dateModification: '02-04-2023'
    },
    {
      nom: 'Salma MHADHBI',
      raisonSociale: 'Société E',
      de: 'Propriétaire X',
      moisAnnee: 'Mai 2023',
      type: 'Type E',
      origine: 'Origine E',
      statut: 'Statut E',
      dateCreation: '01-05-2023',
      dateModification: '02-05-2023'
    },
    {
      nom: 'Yassin BELHADJ',
      raisonSociale: 'Société F',
      de: '',
      moisAnnee: 'Juin 2023',
      type: 'Type F',
      origine: 'Origine F',
      statut: 'Statut F',
      dateCreation: '01-06-2023',
      dateModification: '02-06-2023'
    },
    {
      nom: 'Arij BELHADJ',
      raisonSociale: 'Société G',
      de: 'Proriétaire Y',
      moisAnnee: 'Juillet 2023',
      type: 'Type G',
      origine: 'Origine G',
      statut: 'Statut G',
      dateCreation: '01-07-2023',
      dateModification: '02-07-2023'
    },
    {
      nom: 'Omar KAMMOUN',
      raisonSociale: 'Société H',
      de: '',
      moisAnnee: 'Août 2023',
      type: 'Type H',
      origine: 'Origine H',
      statut: 'Statut H',
      dateCreation: '01-08-2023',
      dateModification: '02-08-2023'
    },
    {
      nom: 'Omar ABDELKADER',
      raisonSociale: 'Société H',
      de: 'Propriétaire Z',
      moisAnnee: 'Août 2023',
      type: 'Type H',
      origine: 'Origine H',
      statut: 'Statut H',
      dateCreation: '01-08-2023',
      dateModification: '02-08-2023'
    },
    {
      nom: 'Nour HASNAOUI',
      raisonSociale: 'Société H',
      de: 'Propriétaire A',
      moisAnnee: 'Août 2023',
      type: 'Type H',
      origine: 'Origine H',
      statut: 'Statut H',
      dateCreation: '01-08-2023',
      dateModification: '02-08-2023'
    }
  ];

  currentPage = 1;
  pageSize = 8;
  totalDossiers = 0;
  pages = [];
  totalPages = 0;

  ngOnInit() {
    this.totalDossiers = this.dossiers.length;
    this.totalPages = Math.ceil(this.totalDossiers / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedDossiers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.dossiers.slice(start, start + this.pageSize);
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

  getDisplayRange() {
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.totalDossiers);
    return `Affichage des données de ${start} à ${end} sur ${this.totalDossiers} entrées`;
  }
}


