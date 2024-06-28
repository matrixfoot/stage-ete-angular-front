import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dossiers-ouverts',
  templateUrl: './dossiers-ouverts.component.html',
  styleUrls: ['./dossiers-ouverts.component.scss']
})
export class DossiersOuvertsComponent implements OnInit {
  dossiers = [
    {
      nom: 'John Doe',
      nomClient: 'Client A',
      moisAnnee: 'Janvier 2023',
      type: 'Type A',
      dateOuverture: '01-01-2023'
    },
    {
      nom: 'Jane Smith',
      nomClient: 'Client B',
      moisAnnee: 'Février 2023',
      type: 'Type B',
      dateOuverture: '01-02-2023'
    },
    // Add more dossier objects as needed
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
