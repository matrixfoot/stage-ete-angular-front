import { Component } from '@angular/core';

@Component({
  selector: 'app-ajout-autre-ds',
  templateUrl: './ajout-autre-ds.component.html',
  styleUrls: ['./ajout-autre-ds.component.scss']
})
export class AjoutAutreDsComponent {
  clients: string[] = ['Sélectionner client:','label1', 'Label2', 'Label3', 'Label4', 'Label5'];
  selectedClient: string = this.clients[0];

  onClientChange(event: any) {
    this.selectedClient = event.target.value;
  }
}
