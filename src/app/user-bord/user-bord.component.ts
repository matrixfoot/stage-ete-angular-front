import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-bord',
  templateUrl: './user-bord.component.html',
  styleUrls: ['./user-bord.component.scss']
})
export class UserBordComponent {
  decfiscmenss = []; // Initialize with actual data

  usertype = 'Client'; // or 'Candidat', based on actual logic
  deccomptabilites = []; // Initialize with actual data
  invoices = []; // Initialize with actual data
  condidates = []; // Initialize with actual data
  contacts = []; // Initialize with actual data
  hoverFeature: string = '';

  collapse1 = false;
  collapse2 = false;
  collapse3 = false;
  collapse4 = false;
  collapse5 = false;
  collapse6 = false;
  selectedTab=0;
  decfiscmenswindow=false
  deccomptabilitewindow=false
  decfiscmensnumber=0;
  deccomptabilitenumber=0;
  condval=0;
  condnonal=0;
  contval=0;
  contnonval=0;
  proformatinvoicemodel: any;

  allotherdsSub: any;
  otherdss: any[]=[];
  alldeccomptabSub: any;
  dsdeccomptabilites: any[]=[];
  alldecfiscmensSub: any;
  dsdecfiscmenss: any[]=[];
  payedotherdss: any[]=[];
  nonpayedotherdss: any[]=[];
  payedsdeccomptabilites: any[]=[];
  nonpayedsdeccomptabilites: any[]=[];
  payedsdecfiscmenss: any[]=[];
  nonpayedsdecfiscmenss: any[]=[];
  alldssusernonpayewindow=false;
  alldssuserpayewindow=false;
  alldecfiscmenss: any[]=[];
  alldeccomptabilites: any[]=[];
  submitting=false;
  previwing=false;
  option0value: string;
  ordernumebr: any;
  proformatinvoicegenerated: any;
  invoicewindow=false;
  invsub: any;
  candidaturevalide=false
  candidaturenonvalide=false
  reclamationtraite=false
  reclamationnontraite=false
  displayedColumns: string[] = ['code', 'nature', 'mois', 'annee', 'prenom', 'nom', 'statut', 'totalHonoraireHT', 'dateCreation', 'payement', 'actions'];
  dataSource: MatTableDataSource<any>;
  displaynote: string;
  today: string = new Date().toLocaleDateString();
  user = {
    nature: 'Personne Physique', // or whatever default you need
    clientcode: 'ABC123',
    matriculefiscale: '123456789',
    adresseactivite: '123 Main St',
    firstname: 'John',
    lastname: 'Doe',
    civilite: 'Monsieur',
    raisonsociale: 'My Company'
  };

  constructor() {
    this.dataSource = new MatTableDataSource(this.getalldsusernonpaye());
  }
  getalldsusernonpaye() {
    // Replace with your actual data fetching logic
    return [
      // Sample data
      {
        _id: '12345',
        nature: 'comptabilite',
        mois: 'January',
        annee: '2023',
        prenom: 'John',
        nom: 'Doe',
        statutadmin: [{ statut: 'Pending' }],
        totalhonoraire: 1000,
        created: new Date(),
      },
      // Add more data here
    ];
  }

  shownotehonoraire() {
    // Replace with your actual logic
    return [0, 1, 2, 3, 4, 5, 6, 7];
  }

  getNavigationautreds(view: string, id: string) {
    // Replace with your actual navigation logic
  }

  getNavigation(view: string, id: string) {
    // Replace with your actual navigation logic
  }

  getNavigationdecfiscmens(view: string, id: string) {
    // Replace with your actual navigation logic
  }

  previewnotehonoraire() {
    // Replace with your actual preview logic
  }
  onTabChange(event: any) {
    this.selectedTab = event.index;
  }
  // Replace with actual methods
  getalldsuser() {
    return [0, 0]; // Dummy implementation
  }
  getalldsuserpaye() {
    return [0, 0]; // Dummy implementation
  }
  closecopPopup() {
    // Define your method here
    this.displaynote = 'none';
  }

  printinvoice() {
    // Define your method here
    console.log('Invoice is being printed');
  }

  payinvoice() {
    // Define your method here
    console.log('Invoice is being paid');
  }
  click7() {
    console.log('click7'); // Replace with actual implementation
  }

  click6() {
    console.log('click6'); // Replace with actual implementation
  }

  click8() {
    console.log('click8'); // Replace with actual implementation
  }

  click9() {
    console.log('click9'); // Replace with actual implementation
  }

  click10() {
    console.log('click10'); // Replace with actual implementation
  }

  click11() {
    console.log('click11'); // Replace with actual implementation
  }

  click12() {
    console.log('click12'); // Replace with actual implementation
  }

  click13() {
    console.log('click13'); // Replace with actual implementation
  }

  click14() {
    console.log('click14'); // Replace with actual implementation
  }
}