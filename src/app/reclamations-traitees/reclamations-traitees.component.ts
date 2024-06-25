import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reclamations-traitees',
  templateUrl: './reclamations-traitees.component.html',
  styleUrls: ['./reclamations-traitees.component.scss']
})
export class ReclamationsTraiteesComponent implements OnInit {
  reclamations = [
    {
      dateCreation: '01-01-2023 10:00',
      email: 'omar.kammoun@example.com',
      prenomNom: 'Omar KAMMOUN',
      fichierJoint: 'https://example.com/omar-kammoun-reclamation.pdf',
      mobile: '+216 22 123 456',
      description: 'Problème de facturation',
      statutAdmin: 'Résolu',
      statutCollaborateur: 'Validé'
    },
    {
      dateCreation: '02-01-2023 10:00',
      email: 'omar.abdelkader@example.com',
      prenomNom: 'Omar ABDELKADER',
      fichierJoint: 'https://example.com/omar-abdelkader-reclamation.pdf',
      mobile: '+216 22 456 789',
      description: 'Erreur de transaction',
      statutAdmin: 'Résolu',
      statutCollaborateur: 'Validé'
    },
    // Add more reclamations as needed
  ];

  currentPage = 1;
  pageSize = 8;
  totalReclamations = 0;
  pages = [];
  totalPages = 0;

  ngOnInit() {
    this.totalReclamations = this.reclamations.length;
    this.totalPages = Math.ceil(this.totalReclamations / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedReclamations() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.reclamations.slice(start, start + this.pageSize);
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
