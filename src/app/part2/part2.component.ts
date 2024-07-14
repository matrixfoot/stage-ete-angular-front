import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss']
})
export class Part2Component  implements   OnInit {
  declarationForm25: FormGroup;
  declarationForm26: FormGroup;
  declarationForm27: FormGroup;
  declarationForm28: FormGroup;
  declarationForm29: FormGroup;
  declarationForm30: FormGroup;
  declarationForm31: FormGroup;

  declarationForm32: FormGroup;
  declarationForm33: FormGroup;
  declarationForm34: FormGroup;
  declarationForm35: FormGroup;
  declarationForm36: FormGroup;
  declarationForm37: FormGroup;
  declarationForm38: FormGroup;
  declarationForm39: FormGroup;
  declarationForm40: FormGroup;
  declarationForm41: FormGroup;
  declarationForm42: FormGroup;
  declarationForm43: FormGroup;
  declarationForm44: FormGroup;
  declarationForm45: FormGroup;
  declarationForm46: FormGroup;
  declarationForm47: FormGroup;
  declarationForm48: FormGroup;
  declarationForm49: FormGroup;


   
  isEditing25: boolean = false;
  isEditing26: boolean = false;
  isEditing27: boolean = false;
  isEditing28: boolean = false;
  isEditing29: boolean = false;
  isEditing30: boolean = false;
  isEditing31: boolean = false;
  isEditing32: boolean = false;
  isEditing33: boolean = false;
  isEditing34: boolean = false;
  isEditing35: boolean = false;
  isEditing36: boolean = false;
  isEditing37: boolean = false;
  isEditing38: boolean = false;
  isEditing39: boolean = false;
  isEditing40: boolean = false;
  isEditing41: boolean = false;
  isEditing42: boolean = false;
  isEditing43: boolean = false;
  isEditing44: boolean = false;
  isEditing45: boolean = false;
  isEditing46: boolean = false;
  isEditing47: boolean = false;
  isEditing48: boolean = false;
  isEditing49: boolean = false;

  successMessage: string = '';
  errorMessage25: string = '';
  errorMessage26: string = '';
  errorMessage27: string = '';
  errorMessage28: string = '';
  errorMessage29: string = '';
  errorMessage30: string = '';
  errorMessage31: string = '';
  errorMessage32: string = '';
  errorMessage33: string = '';
  errorMessage34: string = '';
  errorMessage35: string = '';
  errorMessage36: string = '';
  errorMessage37: string = '';
  errorMessage38: string = '';
  errorMessage39: string = '';
  errorMessage40: string = '';
  errorMessage41: string = '';
  errorMessage42: string = '';
  errorMessage43: string = '';
  errorMessage44: string = '';
  errorMessage45: string = '';
  errorMessage46: string = '';
  errorMessage47: string = '';
  errorMessage48: string = '';
  errorMessage49: string = '';

   
  fieldLabels25 = {
    D250: 'Type enregistrement',
    D251: ' Total assiette intérêts des prêts payés aux établissements bancaires'
  };
  fieldLabels26 = {
    D260: 'Type enregistrement',
    D261: ' Total assiette du prix de cession des immeubles ',
    D262: 'Total de la contribution sociale',
    D263:'Total retenues sur le prix de cession des immeubles,',
  };
   fieldLabels27 = {
    D270: 'Type enregistrement',
    D271: '  Total assiette du Prix de cession des immeubles, des droits sociaux  ',
    D272: ' Taux de la retenue opérée',
    D273: ' Total retenues sur le Prix de cession,des immeuble ',
  };




  fieldLabels28 = {
    D280: 'Type enregistrement',
    D281: '  T Total assiette du Prix de cession des immeubles, des droits sociaux   ',
    D282: ' Taux de la retenue opérée',
    D283: ' Total retenues sur le Prix de cession des immeubles, des droits sociaux',
  };
  fieldLabels29 = {
    D290: 'Type enregistrement',
    D291: '    Total des montants des acquisitions de marchandises, matériels, équipements et de services  ',
    D292: ' Taux de la retenue opérée',
    D293: '  Total Retenues à la source au titremontants des acquisitions ',
  };
  fieldLabels30 = {
    D300: 'Type enregistrement',
    D301: '   Total des Montants des acquisitions de marchandises,',
    D302: ' Taux de la retenue opérée',
    D303: '  Total Retenues à la source au titre Montants des acquisitions de marchandises, matériels,',
  };
  fieldLabels31= {
    D310: 'Type enregistrement',
    D311: '    Total des montants des acquisitions de marchandises, matériels, équipements et de',
    D312: ' Taux de la retenue opérée',
    D313: '  Total Retenues à la source au titre montants des acquisitions de ',
  };
   fieldLabels32= {
    D320: 'Type enregistrement',
    D321: '     Total assiette desMontants des acquisitions de marchandises, matériels, équipements et de ',
 
    D322: ' Taux de la retenue opérée',
    D323: '   Total retenues opérées au titre desMontants des acquisitions de marchandises, matériels ',
  };
   fieldLabels33 = {
    D330: 'Type enregistrement',
    D331: '   Total assiette TVA au titre des Montants égaux ou supérieurs à 1000 dinars y compris la TVA ',
    D332: ' Taux de la retenue opérée',
    D333: '  Total retenues sur la TVA au titre des Montants égaux ou supérieurs à 1000 dinars y compris la TVA',
  }; 
  fieldLabels34 = {
    D340: 'Type enregistrement',
    D341: '  Total assiette TVA au ti ...........',
 
    D342: ' Taux de la retenue opérée',
    D34: '  Total retenues sur la TVA  ...',
  };
  fieldLabels35= {
    D350: 'Type enregistrement',
    D351: '   Total assiette des Rémunérations servis aux personnes non résidentes et établies .....  ',
 
    D352: ' Taux de la retenue opérée',
    D353: '   Total retenues sur la TVA au titre des Honoraires servis  '
  };
  fieldLabels36 = {
    D360: 'Type enregistrement',
    D361: '    Total assiette intérêts des comptes spéciaux d’épargne ouverts auprès des banques et de la CENT..',
 
    D362: ' Taux de la retenue opérée',
    D363: '   Total retenues opérées au titre des intérêts des comptes spéciaux d’épargne ouverts auprès des banques et de la CENT.'
  };
  fieldLabels37 = {
    D370: 'Type enregistrement',
    D371: ' Montants servis aux non résidents établis en Tunisie et qui ne procèdent pas au dépôt de la déclaration d’existence avant d’entamer leur activité :autres établissements stables',
 
    D372: ' Taux de la retenue opérée',
    D373: '   Total retenues opérées au titre des montants servis aux non résidents établis en Tunisie et qui ne procèdent pas au dépôt de la déclaration d’existence avant d’entamer leur activité, autres établissements stables.',
  };
  fieldLabels38 = {
    D380: 'Type enregistrement',
    D381: '    Total assiette des avances dues sur les ventes des entreprises industrielles et des entreprises de commerce en gros aux P.P. soumises à l’impôt sur le revenu selon le régime forfaitaire dans la catégorie des bénéfices industriels etcommerciaux ou sur la base d’une assiette forfaitaire de la catégorie desbénéfices des professions non commerciales.',
 
    D382: ' Taux de la retenue opérée',
    D383: '   Total retenues opérées au titre des avances dues sur les ventes des entreprises industrielles et des entreprises de commerce ',
  };
  fieldLabels39 = {
    D160: 'Type enregistrement',
    D161: '   Total assiette des avances dues sur les ventes des fabricants et embouteilleurs de vin, de bière et de boissons alcoolisées',
 
    D162: ' Taux de la retenue opérée',
    D163: '   Total retenues opérées au titre des avances dues sur les ventes des fabricants et embouteilleurs de vin, de bière et de boissons alcoolisées',
  };
  fieldLabels40 = {
    D400: 'Type enregistrement',
    D401: '   Total assiette au titre de la Plusvalue provenant de la cession des actions ou des parts sociales ou des parts des fonds   ',
 
    D402: ' Taux de la retenue opérée',
    D403: '    Total retenues opérées au titre au titre de la Plus-value provenant de la cession des actions ou des parts sociales ou des parts des fonds',
  };
  fieldLabels41 = {
    D410: 'Type enregistrement',
    D411: '    Total assiette au titre de la Plus-value provenant de la cession des actions ou des parts sociales ou des parts des fonds',
 
    D412: ' Taux de la retenue opérée',
    D413: '   Total retenues opérées au titre la Plusvalue provenant de la cession des actions ou des parts sociales ou desparts des fonds prévus par la législation ',
  };
  fieldLabels42 = {
    D420: 'Type enregistrement',
    D421: '  Total assiette autres rémunérations payées à des personnes physiques non établies et non domiciliées.',
 
    D422: ' Taux de la retenue opérée',
    D423: '  Total retenues opérées au titre des autres rémunérations payées à des personnes physiques non établies et non domiciliées.',
  }; fieldLabels43 = {
    D430: 'Type enregistrement',
    D431: '   Total assiette autres rémunérations....',
 
    D432: ' Taux de la retenue opérée',
    D433: '  Total retenues opérées au titre des autres rémunérations payées à des personnes morales non établies et non domiciliées.',
  };
  fieldLabels44 = {
    D440: 'Type enregistrement',
    D441: '    Total assiette des rémunérations servies à des personnes résidentes ou établies dans un Etat ou un territoire dont le régime fiscal est privilégié',
 
    D442: ' Taux de la retenue opérée',
    D443: '  Total retenues opérées au titre des rémunérations servies à des personnes résidentes ou établies dans un Etat ou un territoire dont lerégime fiscal est privilégié...',
  };
  fieldLabels45 = {
    D450: 'Type enregistrement',
    D451: '   Total assiette commissions des distributeurs agrées des opérateurs téléphoniques servis à des personnes physiques.',
 
    D452: ' Taux de la retenue opérée',
    D453: '   Total retenues opérées au titre des Commissions des distributeurs agrées des opérateurs téléphoniques servis à des, personnes physiques...',
  };
  fieldLabels46= {
    D460: 'Type enregistrement',
    D461: '    Total assiette commissions des distributeurs agrées des opérateurs téléphoniques servis à des personnes morales.',
 
    D462: ' Taux de la retenue opérée',
    D463: '   Total retenues opérées au titre des Commissions des distributeurs agrées des opérateurs téléphoniques servis à despersonnes morales.'
  };
  fieldLabels47= {
    D470: 'Type enregistrement',
    D471: '     Total assiette des revenus des jeux de pari de hasard et de loterie',
 
    D472: ' Taux de la retenue opérée',
    D473: '   Total retenues opérées au titre des revenus des jeux de pari de hasard et de loterie.'
  };

  fieldLabels49= {
    D490: 'champ1',
    D491: ' champ2',
 
    D492: '  champ3',
    D493: '    champ4.'
  };


  fieldLabels48= {
    D480: 'Type enregistrement',
    D481: '     Total assiette du montant de l’impôt sur la ventes des entreprises industrielles et de commerce au profit des intervenants dans la distribution des biens et de produits et services qui ne dépassent pas 20.000 dinarspar an.',
 
    D482: ' Taux de la retenue opérée',
    D483: '   Total retenues opérées au titre des montant de l’impôt dus sur la ventes des entreprises industrielles et de commerce au profit des intervenants dans la distributiondes bien et de produits et servicesqui ne dépassent pas 20.000 dinarspar an'};
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    /*form1 */ 
    this.declarationForm25 = new FormGroup({
      D250: new FormControl({value: '110', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D251: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D252: new FormControl({value: '01000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D253: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    /*form2*/
    this.declarationForm26 = new FormGroup({
      D260: new FormControl({value: '121', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D261: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D262: new FormControl({value: '00250', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D263: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
  
      
    
    this.declarationForm27 = new FormGroup({
      D270: new FormControl({value: '122', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D271: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D272: new FormControl({value: '00250', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D273: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm28 = new FormGroup({
      D280: new FormControl({value: '123', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D281: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D282: new FormControl({value: '01000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D283: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm29 = new FormGroup({
      D290: new FormControl({value: '132', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D291: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D292: new FormControl({value: '00100', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D293: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm30 = new FormGroup({
      D300: new FormControl({value: '133', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D301: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D302: new FormControl({value: '00050', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D303: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm31 = new FormGroup({
      D310: new FormControl({value: '134', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D311: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D312: new FormControl({value: '00050', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D313: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm32 = new FormGroup({
      D320: new FormControl({value: '135', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D321: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D322: new FormControl({value: '00150', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D323: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm33 = new FormGroup({
      D330: new FormControl({value: '140', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D331: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D332: new FormControl({value: '02500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D333: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm34 = new FormGroup({
      D340: new FormControl({value: '150', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D341: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D342: new FormControl({value: ' 10000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D343: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm35 = new FormGroup({
      D350: new FormControl({value: '160', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D351: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D352: new FormControl({value: ' 00000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D353: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm36 = new FormGroup({
      D360: new FormControl({value: '270', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D361: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D362: new FormControl({value: '02500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D363: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
      
    });
    this.declarationForm37 = new FormGroup({
      D370: new FormControl({value: '271', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D371: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D372: new FormControl({value: ' 01500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D373: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm38 = new FormGroup({
      D380: new FormControl({value: '200', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D381: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D382: new FormControl({value: '00100', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D383: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm39 = new FormGroup({
      D390: new FormControl({value: '500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D391: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D392: new FormControl({value: '00500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D393: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm40 = new FormGroup({
      D400: new FormControl({value: '191', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D401: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D402: new FormControl({value: '01000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D403: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm41= new FormGroup({
      D410: new FormControl({value: '192', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D411: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D412: new FormControl({value: '01500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D413: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm42 = new FormGroup({
      D420: new FormControl({value: '051', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D421: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D422: new FormControl({value: '01500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D423: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    }); this.declarationForm43 = new FormGroup({
      D430: new FormControl({value: '052', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D431: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D432: new FormControl({value: '01500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D433: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm44 = new FormGroup({
      D440: new FormControl({value: '220', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D441: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D442: new FormControl({value: '02500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D443: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm45= new FormGroup({
      D450: new FormControl({value: '250', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D451: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D452: new FormControl({value: '00150', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D453: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm46 = new FormGroup({
      D460: new FormControl({value: '251', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D461: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D462: new FormControl({value: '00100', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D463: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm47= new FormGroup({
      D470: new FormControl({value: '280', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D471: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D472: new FormControl({value: '02500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D473: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm48= new FormGroup({
      D480: new FormControl({value: '290', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D481: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D482: new FormControl({value: '00300', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D483: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm49= new FormGroup({
      D490: new FormControl({value: '299', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D491: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{20}$') // Exactement 15 caractères numériques
      ]),
      D492: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 5 caractères numériques
      ]),
      
    });
  }

  
  
  
  
  
  
  
  
  
  
  
  toggleEdit25() {
    this.isEditing25 = !this.isEditing25;
    
    if (this.isEditing25) {
      this.declarationForm25.enable();
    } else {
      this.declarationForm25.disable();
    }
  } 
  toggleEdit26() {
    this.isEditing26 = !this.isEditing26;
    
    if (this.isEditing26) {
      this.declarationForm26.enable();
    } else {
      this.declarationForm26.disable();
    }
  }
  toggleEdit27() {
    this.isEditing27= !this.isEditing27;
    
    if (this.isEditing27) {
      this.declarationForm27.enable();
    } else {
      this.declarationForm27.disable();
    }
  }
  toggleEdit28() {
    this.isEditing28= !this.isEditing28;
    
    if (this.isEditing28) {
      this.declarationForm28.enable();
    } else {
      this.declarationForm28.disable();
    }
  }
  toggleEdit29() {
    this.isEditing29= !this.isEditing29;
    
    if (this.isEditing29) {
      this.declarationForm29.enable();
    } else {
      this.declarationForm29.disable();
    }
  }

  toggleEdit30() {
    this.isEditing30= !this.isEditing30;
    
    if (this.isEditing30) {
      this.declarationForm30.enable();
    } else {
      this.declarationForm30.disable();
    }
  }
  toggleEdit31() {
    this.isEditing31= !this.isEditing31;
    
    if (this.isEditing31) {
      this.declarationForm31.enable();
    } else {
      this.declarationForm31.disable();
    }
  }
  toggleEdit32() {
    this.isEditing32= !this.isEditing32;
    
    if (this.isEditing32) {
      this.declarationForm32.enable();
    } else {
      this.declarationForm32.disable();
    }
  }
  toggleEdit33() {
    this.isEditing33= !this.isEditing33;
    
    if (this.isEditing33) {
      this.declarationForm33.enable();
    } else {
      this.declarationForm33.disable();
    }
  }
  toggleEdit34() {
    this.isEditing34= !this.isEditing34;
    
    if (this.isEditing34) {
      this.declarationForm34.enable();
    } else {
      this.declarationForm34.disable();
    }
  }
  toggleEdit35() {
    this.isEditing35= !this.isEditing35;
    
    if (this.isEditing35) {
      this.declarationForm35.enable();
    } else {
      this.declarationForm35.disable();
    }
  }
  toggleEdit36() {
    this.isEditing36= !this.isEditing36;
    
    if (this.isEditing36) {
      this.declarationForm36.enable();
    } else {
      this.declarationForm36.disable();
    }
  }
  toggleEdit37() {
    this.isEditing37= !this.isEditing37;
    
    if (this.isEditing37) {
      this.declarationForm37.enable();
    } else {
      this.declarationForm37.disable();
    }
  }   toggleEdit38() {
    this.isEditing38= !this.isEditing38;
    
    if (this.isEditing38) {
      this.declarationForm38.enable();
    } else {
      this.declarationForm38.disable();
    }
  }  toggleEdit39() {
    this.isEditing39= !this.isEditing39;
    
    if (this.isEditing39) {
      this.declarationForm39.enable();
    } else {
      this.declarationForm39.disable();
    }
  }  toggleEdit40() {
    this.isEditing40= !this.isEditing40;
    
    if (this.isEditing40) {
      this.declarationForm40.enable();
    } else {
      this.declarationForm40.disable();
    }
  }
  toggleEdit41() {
    this.isEditing41= !this.isEditing41;
    
    if (this.isEditing41) {
      this.declarationForm41.enable();
    } else {
      this.declarationForm41.disable();
    }
  }  toggleEdit42() {
    this.isEditing42= !this.isEditing42;
    
    if (this.isEditing42) {
      this.declarationForm42.enable();
    } else {
      this.declarationForm42.disable();
    }
  }
  toggleEdit43() {
    this.isEditing43= !this.isEditing43;
    
    if (this.isEditing43) {
      this.declarationForm43.enable();
    } else {
      this.declarationForm43.disable();
    }
  }  toggleEdit44() {
    this.isEditing44= !this.isEditing44;
    
    if (this.isEditing44) {
      this.declarationForm44.enable();
    } else {
      this.declarationForm44.disable();
    }
  }
  toggleEdit45() {
    this.isEditing45= !this.isEditing45;
    
    if (this.isEditing45) {
      this.declarationForm45.enable();
    } else {
      this.declarationForm45.disable();
    }
  }
  toggleEdit46() {
    this.isEditing46= !this.isEditing46;
    
    if (this.isEditing46) {
      this.declarationForm46.enable();
    } else {
      this.declarationForm46.disable();
    }
  }
  toggleEdit47() {
    this.isEditing47= !this.isEditing47;
    
    if (this.isEditing47) {
      this.declarationForm47.enable();
    } else {
      this.declarationForm47.disable();
    }
  }
  toggleEdit48() {
    this.isEditing48= !this.isEditing48;
    
    if (this.isEditing48) {
      this.declarationForm48.enable();
    } else {
      this.declarationForm48.disable();
    }
  }
  toggleEdit49() {
    this.isEditing49= !this.isEditing49;
    
    if (this.isEditing49) {
      this.declarationForm49.enable();
    } else {
      this.declarationForm49.disable();
    }
  }





















onSubmit25( ){
  if (this.isEditing25) {
    if (this.declarationForm25.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage25= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm25.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage25= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm25.controls).forEach(field => {
        const control = this.declarationForm25.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels25[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D250') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D251' || field === 'D253') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D252') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage25+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit25();
  }
}
onSubmit26( ){
  if (this.isEditing26) {
    if (this.declarationForm26.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage26= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm26.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage26= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm26.controls).forEach(field => {
        const control = this.declarationForm26.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels26[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D260') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D261' || field === 'D263') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D262') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage26+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit26();
  }
}
onSubmit27( ){
  if (this.isEditing27) {
    if (this.declarationForm27.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage27= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm27.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage27= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm27.controls).forEach(field => {
        const control = this.declarationForm27.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels27[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D270') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D271' || field === 'D273') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D272') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage27+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit27();
  }
}
onSubmit28( ){
  if (this.isEditing28) {
    if (this.declarationForm28.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage28= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm28.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage28= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm28.controls).forEach(field => {
        const control = this.declarationForm28.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels28[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D280') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D281' || field === 'D283') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D282') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage28+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit28();
  }
}
onSubmit29( ){
  if (this.isEditing29) {
    if (this.declarationForm29.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage29= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm29.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage29= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm29.controls).forEach(field => {
        const control = this.declarationForm29.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels29[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D290') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D291' || field === 'D293') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D292') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage29+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit29();
  }
}
onSubmit30( ){
  if (this.isEditing30) {
    if (this.declarationForm30.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage30= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm30.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage30= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm30.controls).forEach(field => {
        const control = this.declarationForm30.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels30[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D300') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D301' || field === 'D303') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D302') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage30+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit30();
  }
}



onSubmit31( ){
  if (this.isEditing31) {
    if (this.declarationForm31.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage31= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm31.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage31= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm31.controls).forEach(field => {
        const control = this.declarationForm31.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels31[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D310') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D311' || field === 'D313') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D312') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage31+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit31();
  }
}

onSubmit32( ){
  if (this.isEditing32) {
    if (this.declarationForm32.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage32= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm32.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage32= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm32.controls).forEach(field => {
        const control = this.declarationForm32.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels32[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D320') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D321' || field === 'D323') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D322') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage32+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit32();
  }
}
onSubmit33( ){
  if (this.isEditing33) {
    if (this.declarationForm33.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage33= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm33.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage33= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm33.controls).forEach(field => {
        const control = this.declarationForm33.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels33[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D330') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D331' || field === 'D333') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D332') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage33+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit33();
  }
}

onSubmit34( ){
  if (this.isEditing34) {
    if (this.declarationForm34.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage34= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm34.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage34= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm34.controls).forEach(field => {
        const control = this.declarationForm34.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels34[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D340') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D341' || field === 'D343') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D342') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage34+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit34();
  }
}
onSubmit35( ){
  if (this.isEditing35) {
    if (this.declarationForm35.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage35= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm35.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage35= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm35.controls).forEach(field => {
        const control = this.declarationForm35.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels35[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D350') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D351' || field === 'D353') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D352') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage35+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit35();
  }
}
onSubmit36( ){
  if (this.isEditing36) {
    if (this.declarationForm36.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage36= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm36.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage36= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm36.controls).forEach(field => {
        const control = this.declarationForm36.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels36[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D360') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D361' || field === 'D363') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D362') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage36+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit36();
  }
}

onSubmit37( ){
  if (this.isEditing37) {
    if (this.declarationForm37.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage37= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm37.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage37= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm37.controls).forEach(field => {
        const control = this.declarationForm37.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels37[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D370') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D371' || field === 'D373') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D372') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage37+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit37();
  }
}
onSubmit38( ){
  if (this.isEditing38) {
    if (this.declarationForm38.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage38= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm38.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage38= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm38.controls).forEach(field => {
        const control = this.declarationForm38.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels38[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D380') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D381' || field === 'D383') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D382') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage38+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit38();
  }
}



onSubmit39( ){
  if (this.isEditing39) {
    if (this.declarationForm39.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage39= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm39.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage39= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm39.controls).forEach(field => {
        const control = this.declarationForm39.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels39[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D390') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D391' || field === 'D393') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D392') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage39+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit39();
  }
}
onSubmit40( ){
  if (this.isEditing40) {
    if (this.declarationForm40.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage40= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm40.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage40= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm40.controls).forEach(field => {
        const control = this.declarationForm40.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels40[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D400') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D401' || field === 'D403') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D402') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage40+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit40();
  }
}
onSubmit41( ){
  if (this.isEditing41) {
    if (this.declarationForm41.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage41= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm41.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage41= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm41.controls).forEach(field => {
        const control = this.declarationForm41.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels41[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D410') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D411' || field === 'D413') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D412') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage41+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit41();
  }
}


onSubmit42( ){
  if (this.isEditing42) {
    if (this.declarationForm42.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage42= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm42.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage42= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm42.controls).forEach(field => {
        const control = this.declarationForm42.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels42[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D420') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D421' || field === 'D423') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D422') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage42+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit42();
  }
}

onSubmit43( ){
  if (this.isEditing43) {
    if (this.declarationForm43.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage43= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm43.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage43= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm43.controls).forEach(field => {
        const control = this.declarationForm43.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels43[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D430') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D431' || field === 'D433') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D432') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage43+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit43();
  }
}
onSubmit44( ){
  if (this.isEditing44) {
    if (this.declarationForm44.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage44= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm44.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage44= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm44.controls).forEach(field => {
        const control = this.declarationForm44.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels44[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D440') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D441' || field === 'D443') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D442') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage44+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit44();
  }
}


onSubmit45( ){
  if (this.isEditing45) {
    if (this.declarationForm45.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage45= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm45.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage45= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm45.controls).forEach(field => {
        const control = this.declarationForm45.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels45[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D450') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D451' || field === 'D453') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D452') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage45+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit45();
  }
}
onSubmit46( ){
  if (this.isEditing46) {
    if (this.declarationForm46.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage46= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm46.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage46= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm46.controls).forEach(field => {
        const control = this.declarationForm46.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels46[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D460') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D461' || field === 'D463') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D462') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage46+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit46();
  }
}
onSubmit47( ){
  if (this.isEditing47) {
    if (this.declarationForm47.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage47= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm47.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage47= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm47.controls).forEach(field => {
        const control = this.declarationForm47.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels47[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D470') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D471' || field === 'D473') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D472') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage47+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit47();
  }
}
onSubmit48( ){
  if (this.isEditing48) {
    if (this.declarationForm48.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage48= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm48.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage48= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm48.controls).forEach(field => {
        const control = this.declarationForm48.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels48[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D480') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D481' || field === 'D483') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D482') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage48+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit48();
  }
}
onSubmit49( ){
  if (this.isEditing49) {
    if (this.declarationForm49.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage49= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm49.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage49= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm49.controls).forEach(field => {
        const control = this.declarationForm49.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels49[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D490') {
                  return `Le champ "${fieldName}" doit être alphanumérique et egal a 299`;
                } else if (field === 'D491'  ) {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 20`;
                } else if (field === 'D492') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage49+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit49();
  }
}
}