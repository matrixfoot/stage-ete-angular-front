import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborateurs',
  templateUrl: './collaborateurs.component.html',
  styleUrls: ['./collaborateurs.component.scss']
})
export class CollaborateursComponent implements OnInit {
  collaborateurs = [
    {
      email: 'omar.kammoun@example.com',
      prenomNom: 'Omar KAMMOUN',
      type: 'Type A',
      mobile: '12345678',
      codeClient: 'C001',
      natureActivite: 'Nature A',
      activite: 'Activité A',
      sousActivite: 'Sous-activité A',
      role: 'Role A',
      roleSuperviseur: 'Superviseur A'
    },
    {
      email: 'omar.abdelkader@example.com',
      prenomNom: 'Omar ABDELKADER',
      type: 'Type B',
      mobile: '23456789',
      codeClient: 'C002',
      natureActivite: 'Nature B',
      activite: 'Activité B',
      sousActivite: 'Sous-activité B',
      role: 'Role B',
      roleSuperviseur: 'Superviseur B'
    },
    {
      email: 'nour.hasnaoui@example.com',
      prenomNom: 'Nour HASNAOUI',
      type: 'Type C',
      mobile: '34567890',
      codeClient: 'C003',
      natureActivite: 'Nature C',
      activite: 'Activité C',
      sousActivite: 'Sous-activité C',
      role: 'Role C',
      roleSuperviseur: 'Superviseur C'
    },
    {
      email: 'salma.mhaddbi@example.com',
      prenomNom: 'Salma MHADHBI',
      type: 'Type D',
      mobile: '45678901',
      codeClient: 'C004',
      natureActivite: 'Nature D',
      activite: 'Activité D',
      sousActivite: 'Sous-activité D',
      role: 'Role D',
      roleSuperviseur: 'Superviseur D'
    },
    {
      email: 'yassmine.mahjoubi@example.com',
      prenomNom: 'Yassmine MAHJOUBI',
      type: 'Type E',
      mobile: '56789012',
      codeClient: 'C005',
      natureActivite: 'Nature E',
      activite: 'Activité E',
      sousActivite: 'Sous-activité E',
      role: 'Role E',
      roleSuperviseur: 'Superviseur E'
    },
    {
      email: 'aymen.belhadj@example.com',
      prenomNom: 'Aymen BELHADJ',
      type: 'Type F',
      mobile: '67890123',
      codeClient: 'C006',
      natureActivite: 'Nature F',
      activite: 'Activité F',
      sousActivite: 'Sous-activité F',
      role: 'Role F',
      roleSuperviseur: 'Superviseur F'
    },
    // Duplicate entries to make up 15 data points
    {
      email: 'omar.kammoun@example.com',
      prenomNom: 'Omar KAMMOUN',
      type: 'Type A',
      mobile: '12345678',
      codeClient: 'C001',
      natureActivite: 'Nature A',
      activite: 'Activité A',
      sousActivite: 'Sous-activité A',
      role: 'Role A',
      roleSuperviseur: 'Superviseur A'
    },
    {
      email: 'omar.abdelkader@example.com',
      prenomNom: 'Omar ABDELKADER',
      type: 'Type B',
      mobile: '23456789',
      codeClient: 'C002',
      natureActivite: 'Nature B',
      activite: 'Activité B',
      sousActivite: 'Sous-activité B',
      role: 'Role B',
      roleSuperviseur: 'Superviseur B'
    },
    {
      email: 'nour.hasnaoui@example.com',
      prenomNom: 'Nour HASNAOUI',
      type: 'Type C',
      mobile: '34567890',
      codeClient: 'C003',
      natureActivite: 'Nature C',
      activite: 'Activité C',
      sousActivite: 'Sous-activité C',
      role: 'Role C',
      roleSuperviseur: 'Superviseur C'
    },
    {
      email: 'salma.mhaddbi@example.com',
      prenomNom: 'Salma MHADHBI',
      type: 'Type D',
      mobile: '45678901',
      codeClient: 'C004',
      natureActivite: 'Nature D',
      activite: 'Activité D',
      sousActivite: 'Sous-activité D',
      role: 'Role D',
      roleSuperviseur: 'Superviseur D'
    },
    {
      email: 'yassmine.mahjoubi@example.com',
      prenomNom: 'Yassmine MAHJOUBI',
      type: 'Type E',
      mobile: '56789012',
      codeClient: 'C005',
      natureActivite: 'Nature E',
      activite: 'Activité E',
      sousActivite: 'Sous-activité E',
      role: 'Role E',
      roleSuperviseur: 'Superviseur E'
    },
    {
      email: 'aymen.belhadj@example.com',
      prenomNom: 'Aymen BELHADJ',
      type: 'Type F',
      mobile: '67890123',
      codeClient: 'C006',
      natureActivite: 'Nature F',
      activite: 'Activité F',
      sousActivite: 'Sous-activité F',
      role: 'Role F',
      roleSuperviseur: 'Superviseur F'
    }
  ];

  currentPage = 1;
  pageSize = 8;
  totalCollaborateurs = 0;
  pages = [];
  totalPages = 0;

  ngOnInit() {
    this.totalCollaborateurs = this.collaborateurs.length;
    this.totalPages = Math.ceil(this.totalCollaborateurs / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedCollaborateurs() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.collaborateurs.slice(start, start + this.pageSize);
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
