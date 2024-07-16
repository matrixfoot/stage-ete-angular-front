import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-statistiques-dernier-mois',
  templateUrl: './statistiques-dernier-mois.component.html',
  styleUrls: ['./statistiques-dernier-mois.component.scss']
})
export class StatistiquesDernierMoisComponent {
  Highcharts: typeof Highcharts = Highcharts;

  barChartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Statistiques du dernier mois'
    },
    xAxis: {
      categories: ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4']
    },
    yAxis: {
      title: {
        text: 'Nombre de transactions'
      }
    },
    series: [{
      type: 'bar',
      name: 'Dossiers',
      data: [30, 50, 70, 90]
    }, {
      type: 'bar',
      name: 'Demandes de services',
      data: [40, 60, 80, 100]
    }]
  };

  lineChartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Montant des transactions du dernier mois'
    },
    xAxis: {
      categories: ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4']
    },
    yAxis: {
      title: {
        text: 'Montant total des transactions (en milliers de DT)'
      }
    },
    series: [{
      type: 'line',
      name: 'Total',
      data: [100, 200, 300, 400]
    }, {
      type: 'line',
      name: 'Validé',
      data: [80, 160, 240, 320]
    }]
  };

  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Répartition des transactions du dernier mois'
    },
    series: [{
      type: 'pie',
      name: 'Pourcentage',
      data: [
        { name: 'Dossiers', y: 45.0 },
        { name: 'Demandes de services', y: 30.0 },
        { name: 'Déclarations fiscales', y: 15.0 },
        { name: 'Autres', y: 10.0 }
      ]
    }]
  };
}
