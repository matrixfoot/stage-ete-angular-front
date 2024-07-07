/* import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-utilisateurs-connectes',
  templateUrl: './utilisateurs-connectes.component.html',
  styleUrls: ['./utilisateurs-connectes.component.scss']
})
export class UtilisateursConnectesComponent implements OnInit {
  lineChart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Patients'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Patients admitted',
        data: [10, 2, 3,6,9,17,20,10,5,2,16]
      } as any
    ]
  });

  pieChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
  
    credits: {
      enabled: false,
    },
  
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
  
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases',
    },
  
    legend: {
      enabled: false,
    },
  
    series: [
      {
        type: 'pie',
        data: [
          { name: 'COVID 19', y: 1, color: '#eeeeee' },
  
          { name: 'HIV/AIDS', y: 2, color: '#393e46' },
  
          { name: 'EBOLA', y: 3, color: '#00adb5' },
          { name: 'DISPORA', y: 4, color: '#eeeeee' },
          { name: 'DIABETES', y: 5, color: '#506ef9' },
        ],
      },
    ],
  });

  utilisateurs = [
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
      dComptabilite: 'D.comptabilité A'
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
      dComptabilite: 'D.comptabilité B'
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
      dComptabilite: 'D.comptabilité C'
    },
    {
      email: 'salma.mhadhbi@example.com',
      prenomNom: 'Salma MHADHBI',
      type: 'Type D',
      mobile: '45678901',
      codeClient: 'C004',
      natureActivite: 'Nature D',
      activite: 'Activité D',
      sousActivite: 'Sous-activité D',
      role: 'Role D',
      dComptabilite: 'D.comptabilité D'
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
      dComptabilite: 'D.comptabilité E'
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
      dComptabilite: 'D.comptabilité F'
    }
  ];

  currentPage = 1;
  pageSize = 8;
  totalUtilisateurs = 0;
  pages = [];
  totalPages = 0;

  ngOnInit() {
    this.totalUtilisateurs = this.utilisateurs.length;
    this.totalPages = Math.ceil(this.totalUtilisateurs / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedUtilisateurs() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.utilisateurs.slice(start, start + this.pageSize);
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
 */