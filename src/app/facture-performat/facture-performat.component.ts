import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facture-performat',
  templateUrl: './facture-performat.component.html',
  styleUrls: ['./facture-performat.component.scss']
})
export class FacturePerformatComponent implements OnInit {
  factures = [
    {
      code: 'F001',
      nom: 'Omar KAMMOUN',
      totalFacture: '1000 dt',
      dateCreation: '01-01-2023'
    },
    {
      code: 'F002',
      nom: 'Omar ABDELKADER',
      totalFacture: '2000 dt',
      dateCreation: '01-02-2023'
    },
    {
      code: 'F003',
      nom: 'Nour HASNAOUI',
      totalFacture: '1500 dt',
      dateCreation: '01-03-2023'
    },
    {
      code: 'F004',
      nom: 'Salma MHADHBI',
      totalFacture: '1200 dt',
      dateCreation: '01-04-2023'
    },
    {
      code: 'F005',
      nom: 'Yassmine MAHJOUBI',
      totalFacture: '1100 dt',
      dateCreation: '01-05-2023'
    },
    {
      code: 'F006',
      nom: 'Aymen BELHADJ',
      totalFacture: '1800 dt',
      dateCreation: '01-06-2023'
    },
    {
      code: 'F007',
      nom: 'Omar KAMMOUN',
      totalFacture: '1300 dt',
      dateCreation: '01-07-2023'
    },
    {
      code: 'F008',
      nom: 'Omar ABDELKADER',
      totalFacture: '1400 dt',
      dateCreation: '01-08-2023'
    },
    {
      code: 'F009',
      nom: 'Nour HASNAOUI',
      totalFacture: '1600 dt',
      dateCreation: '01-09-2023'
    },
    {
      code: 'F010',
      nom: 'Salma MHADHBI',
      totalFacture: '1700 dt',
      dateCreation: '01-10-2023'
    },
    {
      code: 'F011',
      nom: 'Yassmine MAHJOUBI',
      totalFacture: '1900 dt',
      dateCreation: '01-11-2023'
    },
    {
      code: 'F012',
      nom: 'Aymen BELHADJ',
      totalFacture: '2100 dt',
      dateCreation: '01-12-2023'
    },
    {
      code: 'F013',
      nom: 'Omar KAMMOUN',
      totalFacture: '2200 dt',
      dateCreation: '01-01-2024'
    },
    {
      code: 'F014',
      nom: 'Omar ABDELKADER',
      totalFacture: '2300 dt',
      dateCreation: '01-02-2024'
    },
    {
      code: 'F015',
      nom: 'Nour HASNAOUI',
      totalFacture: '2400 dt',
      dateCreation: '01-03-2024'
    }
  ];

  currentPage = 1;
  pageSize = 8;
  totalFactures = 0;
  pages = [];
  totalPages = 0;

  ngOnInit() {
    this.totalFactures = this.factures.length;
    this.totalPages = Math.ceil(this.totalFactures / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedFactures() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.factures.slice(start, start + this.pageSize);
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
