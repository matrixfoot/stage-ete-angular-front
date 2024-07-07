import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reclamations-en-cours',
  templateUrl: './reclamations-en-cours.component.html',
  styleUrls: ['./reclamations-en-cours.component.scss']
})
export class ReclamationsEnCoursComponent implements OnInit {
  reclamations = [
    {
      dateCreation: '01-01-2023 10:00',
      email: 'omar.kammoun@example.com',
      prenomNom: 'Omar KAMMOUN',
      fichierJoint: 'reclamation1.pdf',
      mobile: '987654321',
      description: 'Problème avec la facturation',
      statutAdmin: 'En attente',
      statutCollaborateur: 'En cours'
    },
    {
      dateCreation: '02-01-2023 11:30',
      email: 'omar.abab@example.com',
      prenomNom: 'Omar ABDELKADER',
      fichierJoint: 'reclamation2.pdf',
      mobile: '123456789',
      description: 'Erreur dans le calcul des taxes',
      statutAdmin: 'En cours',
      statutCollaborateur: 'En cours'
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
