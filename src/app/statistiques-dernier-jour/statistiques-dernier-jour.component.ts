/* import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-statistiques-dernier-jour',
  templateUrl: './statistiques-dernier-jour.component.html',
  styleUrls: ['./statistiques-dernier-jour.component.scss']
})
export class StatistiquesDernierJourComponent {
  Highcharts: typeof Highcharts = Highcharts;

  barChartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Statistiques du dernier jour'
    },
    xAxis: {
      categories: ['Heure 1', 'Heure 2', 'Heure 3', 'Heure 4', 'Heure 5', 'Heure 6', 'Heure 7', 'Heure 8', 'Heure 9', 'Heure 10', 'Heure 11', 'Heure 12', 'Heure 13', 'Heure 14', 'Heure 15', 'Heure 16', 'Heure 17', 'Heure 18', 'Heure 19', 'Heure 20', 'Heure 21', 'Heure 22', 'Heure 23', 'Heure 24']
    },
    yAxis: {
      title: {
        text: 'Nombre de transactions'
      }
    },
    series: [{
      type: 'bar',
      name: 'Dossiers',
      data: [5, 6, 7, 8, 6, 5, 4, 3, 7, 6, 5, 8, 9, 7, 5, 6, 7, 8, 6, 5, 4, 3, 7, 6]
    }, {
      type: 'bar',
      name: 'Demandes de services',
      data: [4, 5, 6, 7, 5, 4, 3, 2, 6, 5, 4, 7, 8, 6, 4, 5, 6, 7, 5, 4, 3, 2, 6, 5]
    }]
  };

  lineChartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Montant des transactions du dernier jour'
    },
    xAxis: {
      categories: ['Heure 1', 'Heure 2', 'Heure 3', 'Heure 4', 'Heure 5', 'Heure 6', 'Heure 7', 'Heure 8', 'Heure 9', 'Heure 10', 'Heure 11', 'Heure 12', 'Heure 13', 'Heure 14', 'Heure 15', 'Heure 16', 'Heure 17', 'Heure 18', 'Heure 19', 'Heure 20', 'Heure 21', 'Heure 22', 'Heure 23', 'Heure 24']
    },
    yAxis: {
      title: {
        text: 'Montant total des transactions (en milliers de DT)'
      }
    },
    series: [{
      type: 'line',
      name: 'Total',
      data: [10, 15, 20, 25, 15, 10, 5, 10, 20, 15, 10, 25, 30, 20, 15, 10, 20, 25, 15, 10, 5, 10, 20, 15]
    }, {
      type: 'line',
      name: 'Validé',
      data: [8, 12, 16, 20, 12, 8, 4, 8, 16, 12, 8, 20, 24, 16, 12, 8, 16, 20, 12, 8, 4, 8, 16, 12]
    }]
  };

  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Répartition des transactions du dernier jour'
    },
    series: [{
      type: 'pie',
      name: 'Pourcentage',
      data: [
        { name: 'Dossiers', y: 45.0 },
        { name: 'Demandes de services', y: 35.0 },
        { name: 'Déclarations fiscales', y: 10.0 },
        { name: 'Autres', y: 10.0 }
      ]
    }]
  };
}
 */