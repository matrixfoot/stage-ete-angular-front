/* // statistiques-detaillees.component.ts
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-statistiques-detaillees',
  templateUrl: './statistiques-detaillees.component.html',
  styleUrls: ['./statistiques-detaillees.component.scss']
})
export class StatistiquesDetailleesComponent {
  Highcharts: typeof Highcharts = Highcharts;

  barChartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Statistiques mensuelles'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Nombre de transactions'
      }
    },
    series: [{
      type: 'bar',
      name: 'Dossiers',
      data: [29, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54]
    }, {
      type: 'bar',
      name: 'Demandes de services',
      data: [39, 81, 126, 149, 164, 196, 155, 168, 226, 204, 105, 64]
    }]
  };

  lineChartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Statistiques trimestrielles'
    },
    xAxis: {
      categories: ['T1', 'T2', 'T3', 'T4']
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
      text: 'Répartition par catégorie'
    },
    series: [{
      type: 'pie',
      name: 'Pourcentage',
      data: [
        { name: 'Dossiers', y: 45.0 },
        { name: 'Demandes de services', y: 26.8 },
        { name: 'Déclarations fiscales', y: 12.8 },
        { name: 'Autres', y: 15.4 }
      ]
    }]
  };
}
 */