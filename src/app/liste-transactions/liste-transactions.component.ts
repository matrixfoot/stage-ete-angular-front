// liste-transactions.component.ts
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-liste-transactions',
  templateUrl: './liste-transactions.component.html',
  styleUrls: ['./liste-transactions.component.scss']
})
export class ListeTransactionsComponent {
  Highcharts: typeof Highcharts = Highcharts;

  transactions = [
    { date: '2023-06-01 10:30', type: 'Dossier', montant: 1500, description: 'Dossier A', client: 'Client 1' },
    { date: '2023-06-02 14:00', type: 'Demande de service', montant: 2000, description: 'Service B', client: 'Client 2' },
    { date: '2023-06-03 09:15', type: 'Déclaration fiscale', montant: 1000, description: 'Déclaration C', client: 'Client 3' },
    // Ajoutez d'autres transactions ici
  ];

  barChartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Transactions par type'
    },
    xAxis: {
      categories: this.transactions.map(t => t.type)
    },
    yAxis: {
      title: {
        text: 'Montant (en DT)'
      }
    },
    series: [{
      type: 'bar',
      name: 'Montant',
      data: this.transactions.map(t => t.montant)
    }]
  };

  lineChartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Montant des transactions au fil du temps'
    },
    xAxis: {
      categories: this.transactions.map(t => t.date)
    },
    yAxis: {
      title: {
        text: 'Montant (en DT)'
      }
    },
    series: [{
      type: 'line',
      name: 'Montant',
      data: this.transactions.map(t => t.montant)
    }]
  };

  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Répartition des types de transactions'
    },
    series: [{
      type: 'pie',
      name: 'Pourcentage',
      data: this.transactions.reduce((acc, t) => {
        const index = acc.findIndex(item => item.name === t.type);
        if (index >= 0) {
          acc[index].y += t.montant;
        } else {
          acc.push({ name: t.type, y: t.montant });
        }
        return acc;
      }, [])
    }]
  };
}
