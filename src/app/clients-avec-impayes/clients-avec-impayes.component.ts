import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-avec-impayes',
  templateUrl: './clients-avec-impayes.component.html',
  styleUrls: ['./clients-avec-impayes.component.scss']
})
export class ClientsAvecImpayesComponent implements OnInit {
  clients = [
    { raisonSociale: 'Société A', nom: 'Omar KAMMOUN', codeClient: 'C001', totalImpaye: '1000 dt', seuilImpaye: '500 dt', tendance: '10%', notifications: '2' },
    { raisonSociale: 'Société B', nom: 'Omar ABDELKADER', codeClient: 'C002', totalImpaye: '2000 dt', seuilImpaye: '1000 dt', tendance: '-5%', notifications: '1' },
    { raisonSociale: 'Société C', nom: 'Nour HASNAOUI', codeClient: 'C003', totalImpaye: '1500 dt', seuilImpaye: '750 dt', tendance: '15%', notifications: '0' },
    { raisonSociale: 'Société D', nom: 'Salma MHADHBI', codeClient: 'C004', totalImpaye: '1200 dt', seuilImpaye: '600 dt', tendance: '-20%', notifications: '3' },
    { raisonSociale: 'Société E', nom: 'Yassmine MAHJOUBI', codeClient: 'C005', totalImpaye: '1100 dt', seuilImpaye: '550 dt', tendance: '25%', notifications: '1' },
    { raisonSociale: 'Société F', nom: 'Aymen BELHADJ', codeClient: 'C006', totalImpaye: '1800 dt', seuilImpaye: '900 dt', tendance: '-15%', notifications: '0' },
    { raisonSociale: 'Société G', nom: 'Omar KAMMOUN', codeClient: 'C007', totalImpaye: '1300 dt', seuilImpaye: '650 dt', tendance: '30%', notifications: '2' },
    { raisonSociale: 'Société H', nom: 'Omar ABDELKADER', codeClient: 'C008', totalImpaye: '1400 dt', seuilImpaye: '700 dt', tendance: '-10%', notifications: '1' },
    { raisonSociale: 'Société I', nom: 'Nour HASNAOUI', codeClient: 'C009', totalImpaye: '1600 dt', seuilImpaye: '800 dt', tendance: '5%', notifications: '0' },
    { raisonSociale: 'Société J', nom: 'Salma MHADHBI', codeClient: 'C010', totalImpaye: '1700 dt', seuilImpaye: '850 dt', tendance: '-8%', notifications: '3' },
    { raisonSociale: 'Société K', nom: 'Yassmine MAHJOUBI', codeClient: 'C011', totalImpaye: '1900 dt', seuilImpaye: '950 dt', tendance: '12%', notifications: '1' },
    { raisonSociale: 'Société L', nom: 'Aymen BELHADJ', codeClient: 'C012', totalImpaye: '2000 dt', seuilImpaye: '1000 dt', tendance: '-3%', notifications: '0' },
    { raisonSociale: 'Société M', nom: 'Omar KAMMOUN', codeClient: 'C013', totalImpaye: '2100 dt', seuilImpaye: '1050 dt', tendance: '18%', notifications: '2' },
    { raisonSociale: 'Société N', nom: 'Omar ABDELKADER', codeClient: 'C014', totalImpaye: '2200 dt', seuilImpaye: '1100 dt', tendance: '-22%', notifications: '1' },
    { raisonSociale: 'Société O', nom: 'Nour HASNAOUI', codeClient: 'C015', totalImpaye: '2300 dt', seuilImpaye: '1150 dt', tendance: '20%', notifications: '0' }
];

  currentPage = 1;
  pageSize = 8;
  totalClients = 0;
  pages = [];
  totalPages = 0;

  ngOnInit() {
    this.totalClients = this.clients.length;
    this.totalPages = Math.ceil(this.totalClients / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedClients() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.clients.slice(start, start + this.pageSize);
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
