import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-view-condidate',
  templateUrl: './view-condidate.component.html',
  styleUrls: ['./view-condidate.component.scss']
})
export class ViewCondidateComponent  implements OnInit {
  count: number = 0;
   intervalId: any;


  
  ngOnInit(): void {
     this.intervalId = setInterval(() => this.increment(), 1000);
  }
  increment() {
    this.count++;
  }
}
