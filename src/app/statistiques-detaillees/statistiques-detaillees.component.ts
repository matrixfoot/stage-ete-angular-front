import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-statistiques-detaillees',
  templateUrl: './statistiques-detaillees.component.html',
  styleUrls: ['./statistiques-detaillees.component.scss']
})
export class StatistiquesDetailleesComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  };
  barChartLabels: Label[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'En attente' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'En cours' }
  ];

  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [{}]
    }
  };
  lineChartLabels: Label[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'];
  lineChartType: ChartType = 'line';
  lineChartLegend = true;
  lineChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Nombre de factures' }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
}
