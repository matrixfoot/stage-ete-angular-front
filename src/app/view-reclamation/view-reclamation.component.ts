import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-reclamation',
  templateUrl: './view-reclamation.component.html',
  styleUrls: ['./view-reclamation.component.scss']
})
export class ViewReclamationComponent implements OnInit {
count: number = 0;
   intervalId: any;


  
  ngOnInit(): void {
     this.intervalId = setInterval(() => this.increment(), 1000);
  }
  increment() {
    this.count++;
  }
}
