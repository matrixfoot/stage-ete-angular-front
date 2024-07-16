import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-saisie-auto-banque',
  templateUrl: './saisie-auto-banque.component.html',
  styleUrls: ['./saisie-auto-banque.component.scss']
})
export class SaisieAutoBanqueComponent {
  i : number =0;
  compte: any;
  transactions: any[] = [];
  configurationMapping = {
    celluleNumeroCompte: '',
    celluleDebit: '',
    celluleCredit: '',
    ligneDebutTransactions: 0,
    ligneFinTransactions: 0,
    colonneDateTransaction: '',
    colonneDesignation: '',
    colonneDebitTransaction: '',
    colonneCreditTransaction: '',
    colonneJourTransaction:''
  };
  totalDebit: number = 0;
  totalCredit: number = 0;
  nouveauSolde: number = 0;

  changementFichier(event: any) {
    const fichier = event.target.files[0];
    let lecteurFichier = new FileReader();
    lecteurFichier.onload = (e) => {
      let data = new Uint8Array(e.target?.result as ArrayBufferLike);
      let classeur = XLSX.read(data, { type: 'array' });
      let nomFeuille = classeur.SheetNames[0];
      let feuille = classeur.Sheets[nomFeuille];
      let jsonData: any[][] = XLSX.utils.sheet_to_json(feuille, { header: 1 });

      this.analyserInfoCompte(jsonData);
      this.analyserTransactions(jsonData);
      this.calculerTotaux();
      this.calculerNouveauSolde();
    };
    lecteurFichier.readAsArrayBuffer(fichier);
  }

  analyserInfoCompte(jsonData: any[][]) {
    const celluleNumeroCompte = this.configurationMapping.celluleNumeroCompte;
    const celluleDebit = this.configurationMapping.celluleDebit;
    const celluleCredit = this.configurationMapping.celluleCredit;

    const valeurCelluleNumeroCompte = this.obtenirDataCellule(jsonData, celluleNumeroCompte);
    const valeurCelluleDebit = this.obtenirDataCellule(jsonData, celluleDebit);
    const valeurCelluleCredit = this.obtenirDataCellule(jsonData, celluleCredit);

    this.compte = {
      numeroCompte: this.extraireNumeroCompte(valeurCelluleNumeroCompte),
      debit: this.formatNombre(valeurCelluleDebit),
      credit: this.formatNombre(valeurCelluleCredit)
    };
  }

  analyserTransactions(jsonData: any[][]) {
    const ligneDebutTransactions = this.configurationMapping.ligneDebutTransactions;
    const ligneFinTransactions = this.configurationMapping.ligneFinTransactions;
    const colJourTransaction = this.colonneVersIndex(this.configurationMapping.colonneJourTransaction);
    const colDateTransaction = this.colonneVersIndex(this.configurationMapping.colonneDateTransaction);
    const colDesignation = this.colonneVersIndex(this.configurationMapping.colonneDesignation);
    const colDebitTransaction = this.colonneVersIndex(this.configurationMapping.colonneDebitTransaction);
    const colCreditTransaction = this.colonneVersIndex(this.configurationMapping.colonneCreditTransaction);
    
    this.transactions = [];
    for (let i = ligneDebutTransactions + 1; i <= ligneFinTransactions; i++) {
      if (jsonData[i].length > 0 && jsonData[i][colDateTransaction]) {
        const dateTransaction = this.dateExcelVersJS(jsonData[i][colDateTransaction]);
        if (dateTransaction) {
          let transaction = {
            jourTransaction: `${dateTransaction[8]}${dateTransaction[9]}`,
            dateTransaction: dateTransaction,
            designation: jsonData[i][colDesignation],
            debit: this.formatNombre(jsonData[i][colDebitTransaction]),
            credit: this.formatNombre(jsonData[i][colCreditTransaction]),
            objetDebit: '',
            objetCredit: '',
            contientTiers: '',
            fournisseur: '',
            client: ''
          };
          this.transactions.push(transaction);
        }
      }
    }
  }

  obtenirDataCellule(jsonData: any[][], cellule: string): any {
    const match = cellule.match(/^([A-Z]+)(\d+)$/);
    if (!match) {
      return null;
    }
    const col = match[1];
    const ligne = parseInt(match[2], 10) - 1;
    const indexCol = this.colonneVersIndex(col);
    return jsonData[ligne][indexCol];
  }

  colonneVersIndex(colonne: string): number {
    let index = 0;
    for (let i = 0; i < colonne.length; i++) {
      index = index * 26 + (colonne.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
    }
    return index - 1;
  }

  dateExcelVersJS(serial: number): string | null {
    if (typeof serial !== 'number' || isNaN(serial)) {
      return null;
    }

    const joursUTC = Math.floor(serial - 25569);
    const valeurUTC = joursUTC * 86400;
    const infoDate = new Date(valeurUTC * 1000);

    if (isNaN(infoDate.getTime())) {
      return null;
    }

    return infoDate.toISOString().split('T')[0];
  }

  extraireNumeroCompte(input: string): string | null {
    const matchNumeroCompte = input.match(/N° COMPTE (\d+\.\d+\.\d+)/);
    return matchNumeroCompte ? matchNumeroCompte[1] : null;
  }

  formatNombre(valeur: string | number): number {
    if (valeur === undefined || valeur === null) {
      return 0;
    }
    if (typeof valeur === 'string') {
      valeur = parseFloat(valeur.replace(/\s/g, '').replace(',', '.'));
    }
    return parseFloat(valeur.toFixed(3));
  }

  calculerTotaux() {
    this.totalDebit = parseFloat(this.transactions.reduce((total, transaction) => total + (transaction.debit || 0), 0).toFixed(3));
    this.totalCredit = parseFloat(this.transactions.reduce((total, transaction) => total + (transaction.credit || 0), 0).toFixed(3));
  }

  calculerNouveauSolde() {
    const soldeInitial = this.formatNombre(this.compte.credit) - this.formatNombre(this.compte.debit);
    const soldeTransactions = this.totalCredit - this.totalDebit;
    this.nouveauSolde = parseFloat((soldeInitial + soldeTransactions).toFixed(3));
  }

  supprimerCompte() {
    this.compte = null;
    this.transactions = [];
    this.totalDebit = 0;
    this.totalCredit = 0;
    this.nouveauSolde = 0;
  }

  supprimerTransaction(index: number) {
    if (index >= 0 && index < this.transactions.length) {
      this.transactions.splice(index, 1);
      this.calculerTotaux();
      this.calculerNouveauSolde();
    }
  }
}
