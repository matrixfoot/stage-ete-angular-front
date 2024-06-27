import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ds-marques-payes',
  templateUrl: './ds-marques-payes.component.html',
  styleUrls: ['./ds-marques-payes.component.scss']
})
export class DsMarquesPayesComponent implements OnInit {
  demandes = [
    {
      code: 'D001',
      nature: 'Nature A',
      moisAnnee: 'Janvier 2023',
      nom: 'Omar KAMMOUN',
      statut: 'Payé',
      totalHonoraire: '1000 dt',
      dateCreation: '01-01-2023'
    },
    {
      code: 'D002',
      nature: 'Nature B',
      moisAnnee: 'Février 2023',
      nom: 'Omar ABDELKADER',
      statut: 'Payé',
      totalHonoraire: '2000 dt',
      dateCreation: '01-02-2023'
    },
    {
      code: 'D003',
      nature: 'Nature C',
      moisAnnee: 'Mars 2023',
      nom: 'Nour HASNAOUI',
      statut: 'Payé',
      totalHonoraire: '1500 dt',
      dateCreation: '01-03-2023'
    },
    {
      code: 'D004',
      nature: 'Nature D',
      moisAnnee: 'Avril 2023',
      nom: 'Salma MHADHBI',
      statut: 'Payé',
      totalHonoraire: '1200 dt',
      dateCreation: '01-04-2023'
    },
    {
      code: 'D005',
      nature: 'Nature E',
      moisAnnee: 'Mai 2023',
      nom: 'Yassmine MAHJOUBI',
      statut: 'Payé',
      totalHonoraire: '1100 dt',
      dateCreation: '01-05-2023'
    },
    {
      code: 'D006',
      nature: 'Nature F',
      moisAnnee: 'Juin 2023',
      nom: 'Aymen BELHADJ',
      statut: 'Payé',
      totalHonoraire: '1800 dt',
      dateCreation: '01-06-2023'
    },
    {
      code: 'D007',
      nature: 'Nature G',
      moisAnnee: 'Juillet 2023',
      nom: 'Omar KAMMOUN',
      statut: 'Payé',
      totalHonoraire: '1300 dt',
      dateCreation: '01-07-2023'
    },
    {
      code: 'D008',
      nature: 'Nature H',
      moisAnnee: 'Août 2023',
      nom: 'Omar ABDELKADER',
      statut: 'Payé',
      totalHonoraire: '1400 dt',
      dateCreation: '01-08-2023'
    },
    {
      code: 'D009',
      nature: 'Nature I',
      moisAnnee: 'Septembre 2023',
      nom: 'Nour HASNAOUI',
      statut: 'Payé',
      totalHonoraire: '1600 dt',
      dateCreation: '01-09-2023'
    },
    {
      code: 'D010',
      nature: 'Nature J',
      moisAnnee: 'Octobre 2023',
      nom: 'Salma MHADHBI',
      statut: 'Payé',
      totalHonoraire: '1700 dt',
      dateCreation: '01-10-2023'
    },
    {
      code: 'D011',
      nature: 'Nature K',
      moisAnnee: 'Novembre 2023',
      nom: 'Yassmine MAHJOUBI',
      statut: 'Payé',
      totalHonoraire: '1900 dt',
      dateCreation: '01-11-2023'
    },
    {
      code: 'D012',
      nature: 'Nature L',
      moisAnnee: 'Décembre 2023',
      nom: 'Aymen BELHADJ',
      statut: 'Payé',
      totalHonoraire: '2100 dt',
      dateCreation: '01-12-2023'
    },
    {
      code: 'D013',
      nature: 'Nature M',
      moisAnnee: 'Janvier 2024',
      nom: 'Omar KAMMOUN',
      statut: 'Payé',
      totalHonoraire: '2200 dt',
      dateCreation: '01-01-2024'
    },
    {
      code: 'D014',
      nature: 'Nature N',
      moisAnnee: 'Février 2024',
      nom: 'Omar ABDELKADER',
      statut: 'Payé',
      totalHonoraire: '2300 dt',
      dateCreation: '01-02-2024'
    },
    {
      code: 'D015',
      nature: 'Nature O',
      moisAnnee: 'Mars 2024',
      nom: 'Nour HASNAOUI',
      statut: 'Payé',
      totalHonoraire: '2400 dt',
      dateCreation: '01-03-2024'
    }
  ];

  currentPage = 1;
  pageSize = 8;
  totalDemandes = 0;
  pages = [];
  totalPages = 0;

  ngOnInit() {
    this.totalDemandes = this.demandes.length;
    this.totalPages = Math.ceil(this.totalDemandes / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedDemandes() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.demandes.slice(start, start + this.pageSize);
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
