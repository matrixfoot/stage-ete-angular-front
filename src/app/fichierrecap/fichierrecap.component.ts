import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-fichierrecap',
  templateUrl: './fichierrecap.component.html',
  styleUrls: ['./fichierrecap.component.scss']
})
export class FichierrecapComponent implements OnInit {
  declarationForm0: FormGroup;
  declarationForm2: FormGroup;
  declarationForm3: FormGroup;
  declarationForm4: FormGroup;
  declarationForm5: FormGroup;
  declarationForm6: FormGroup;
  declarationForm7: FormGroup;

  declarationForm8: FormGroup;
  declarationForm9: FormGroup;
  declarationForm10: FormGroup;
  declarationForm11: FormGroup;
  declarationForm12: FormGroup;
  declarationForm13: FormGroup;
  declarationForm14: FormGroup;
  declarationForm15: FormGroup;
  declarationForm16: FormGroup;
  declarationForm17: FormGroup;
  declarationForm18: FormGroup;
  declarationForm19: FormGroup;
  declarationForm20: FormGroup;
  declarationForm21: FormGroup;
  declarationForm22: FormGroup;
  declarationForm23: FormGroup;
  declarationForm24: FormGroup;


  isEditing: boolean = false;
  isEditing2: boolean = false;
  isEditing3: boolean = false;
  isEditing4: boolean = false;
  isEditing5: boolean = false;
  isEditing6: boolean = false;
  isEditing7: boolean = false;
  isEditing8: boolean = false;
  isEditing9: boolean = false;
  isEditing10: boolean = false;
  isEditing11: boolean = false;
  isEditing12: boolean = false;
  isEditing13: boolean = false;
  isEditing14: boolean = false;
  isEditing17: boolean = false;
  isEditing18: boolean = false;
  isEditing15: boolean = false;
  isEditing16: boolean = false;
  isEditing19: boolean = false;
  isEditing20: boolean = false;
  isEditing21: boolean = false;
  isEditing22: boolean = false;
  isEditing23: boolean = false;
  isEditing24: boolean = false;


  successMessage: string = '';
  errorMessage: string = '';
  errorMessage2: string = '';
  errorMessage3: string = '';
  errorMessage4: string = '';
  errorMessage5: string = '';
  errorMessage6: string = '';
  errorMessage7: string = '';
  errorMessage8: string = '';
  errorMessage9: string = '';
  errorMessage10: string = '';
  errorMessage11: string = '';
  errorMessage12: string = '';
  errorMessage13: string = '';
  errorMessage14: string = '';
  errorMessage15: string = '';
  errorMessage16: string = '';
  errorMessage17: string = '';
  errorMessage18: string = '';
  errorMessage19: string = '';
  errorMessage20: string = '';
  errorMessage21: string = '';
  errorMessage22: string = '';
  errorMessage23: string = '';
  errorMessage24: string = '';

  fieldLabels = {
    D010: 'Type enregistrement',
    D011: 'Total assiette',
    D012: 'Zone réservée',
    D013: 'Total retenues'
  };
  fieldLabels2 = {
    D020: 'Type enregistrement',
    D021: 'Total assiette',
    D022: 'Zone réservée',
    D023: 'Total retenues'
  };
  fieldLabels3 = {
    D030: 'Type enregistrement',
    D031: ' Zone réservée',
    D032: 'Total de la contribution sociale',
    
  }; fieldLabels4 = {
    D040: 'Type enregistrement',
    D041: '  Total assiette ',
    D042: ' Taux de la retenue opérée',
    D043: 'Total retenues opérées au titre de Commissions s, Courtages, Loyers et rémunérations au titre des activité non commerciales servis aux personnes physique résidentes etétablies.'
  };
  fieldLabels5 = {
    D050: 'Type enregistrement',
    D051: '  Total assiette ',
    D052: ' Taux de la retenue opérée',
    D053: 'Total retenues opérées au titre de Commissions s, Courtages, Loyers et rémunérations au titre des activité non commerciales servis aux personnes physique résidentes etétablies.'
  };
  fieldLabels6 = {
    D060: 'Type enregistrement',
    D061: '   Total assiette Commissions Courtages, Loyers etrémunérations au servis aux personnes physiques nondomiciliés ni établis en Tunisie. ',
    D062: ' Taux de la retenue opérée',
    D063: ' Total retenues opérées au titre des Commissions, Courtages, Loyers etrémunérations au servis aux personnes physiques nondomiciliés ni établis en Tunisie.'
  };
  fieldLabels7 = {
    D070: 'Type enregistrement',
    D071: '   Total assiette Commissions Courtages, Loyers etrémunérations au servis aux personnes physiques nondomiciliés ni établis en Tunisie. ',
    D072: ' Taux de la retenue opérée',
    D073: ' Total retenues opérées au titre des Commissions, Courtages, Loyers etrémunérations au servis aux personnes physiques nondomiciliés ni établis en Tunisie.'
  };
  fieldLabels8 = {
    D080: 'Type enregistrement',
    D081: '   Total assiette Honoraires servis aux personnes physiques non soumises au régime réel',
    D082: ' Taux de la retenue opérée',
    D083: '  Total retenues opérées au titre des Honoraires servis aux personnes physiques non soumises au régime réel'
  }; fieldLabels9 = {
    D090: 'Type enregistrement',
    D091: '     Total assiette Honoraires servis aux personnes morales et aux personnes physiques soumises au régime réel',
 
    D092: ' Taux de la retenue opérée',
    D093: '  Total retenues opérées au titre des Honoraires servis aux personnes physiques non soumises au régime réel.'
  }; fieldLabels10 = {
    D100: 'Type enregistrement',
    D101: '    Total assiette Rémunérations servies aux artistes et créateurs. ',
    D102: ' Taux de la retenue opérée',
    D103: '  Total retenues au titre des Rémunérations servies aux artistes et créateurs.'
  }; fieldLabels11 = {
    D110: 'Type enregistrement',
    D111: '   Total assiette Loyers des Hôtels servis aux personnes morales et aux personnes physiques soumises au régime réel',
 
    D112: ' Taux de la retenue opérée',
    D113: '  Total retenues opérées au titre des Loyers des Hôtels servis aux personnes morales et aux personnes physiques soumises aurégime réel'
  };
  fieldLabels12 = {
    D120: 'Type enregistrement',
    D121: '    Total assiette Rémunérations payées en contrepartie de la performance dans la prestation de services pour le compte d’autrui.',
 
    D122: ' Taux de la retenue opérée',
    D123: '   Total retenues opérées au titre des Rémunérations payées en contrepartie de la performance dans la prestation de services pour le compte d’autrui.'
  };
  fieldLabels13 = {
    D130: 'Type enregistrement',
    D131: '    Total assiette intérêts des comptes spéciaux d’épargne ouverts auprès des banques et de la CENT..',
 
    D132: ' Taux de la retenue opérée',
    D133: '   Total retenues opérées au titre des intérêts des comptes spéciaux d’épargne ouverts auprès des banques et de la CENT.'
  };
  fieldLabels14 = {
    D140: 'Type enregistrement',
    D141: '    Total assiette Revenus des autres capitaux mobiliers servis aux personnes physiques résidents en Tunisie..',
 
    D142: ' Taux de la retenue opérée',
    D143: '   Total retenues opérées au titre des Revenus des autres capitaux mobiliers servis aux personnes physiques résidents en Tunisie'
  };
  fieldLabels15 = {
    D150: 'Type enregistrement',
    D151: '    Total assiette Revenus des autres capitaux mobiliers servis auxpersonnes morales résidents en Tunisie',
 
    D152: ' Taux de la retenue opérée',
    D153: '  Total retenues opérées au titre des Revenus des autres capitaux mobiliers servis aux personnes morales résidents en Tunisie.'
  };
  fieldLabels16 = {
    D160: 'Type enregistrement',
    D161: '    Total assiette Revenus des autres capitaux mobiliers servis aux personnes physiques non-résidents en Tunisie',
 
    D162: ' Taux de la retenue opérée',
    D163: '   Total retenues opérées au titre des Revenus des autres capitaux mobiliers servis aux personnes physiquesnon résidents en Tunisie.'
  };
  fieldLabels17 = {
    D170: 'Type enregistrement',
    D171: '    Total assiette Revenus des autres capitaux mobiliers servis aux personnes morales non-résidents en Tunisie.',
 
    D172: ' Taux de la retenue opérée',
    D173: '   Total retenues opérées au titre desRevenus des autres capitaux mobiliers servis aux personnes morales non résidents en Tunisie..'
  };
  fieldLabels18 = {
    D180: 'Type enregistrement',
    D181: '   Total assiette des actions et des parts sociales servies à des personnes physiques résidentes.',
 
    D182: ' Taux de la retenue opérée',
    D183: '   Total retenues opérées au titre des actions et des parts sociales servies des personnes physiquesrésidentes..'
  };
  fieldLabels19 = {
    D190: 'Type enregistrement',
    D191: '  Total assiette des actions et partssociales servis à des personnes physiques et morales non résidentes.',
 
    D192: ' Taux de la retenue opérée',
    D193: '  Total retenues opérées au titre des parts des actions servis à des personnes physiques et moralesnon résidentes.'
  }; fieldLabels20 = {
    D200: 'Type enregistrement',
    D201: '   Total assiette des Rémunérations et primes attribuées aux membres des conseils, des directoires et descomités des sociétés servies auxpersonnes physiques résidentes en Tunisie.',
 
    D202: ' Taux de la retenue opérée',
    D203: '  Total des retenues opérées au titre des Rémunérations et primes attribuées aux membres des conseils, des directoires et des comités des sociétés servies aux personnes physiques résidentes en Tunisie..'
  };
  fieldLabels21 = {
    D210: 'Type enregistrement',
    D211: '   Total assiette des Rémunérations et primes attribuées aux membres des conseils, des directoires et des comités des sociétés servies aux personnes morales résidentes en Tunisie.',
 
    D212: ' Taux de la retenue opérée',
    D213: '  Total des retenues opérées au titre Rémunérations et primes attribuées aux membres des conseils, des directoires et des comités des sociétés servies aux personnes morales résidentes en Tunisie..'
  };
  fieldLabels22= {
    D220: 'Type enregistrement',
    D221: '    Total assiette des Rémunérations et primes attribuées aux membres des conseils, des directoires et des comités des sociétés servies aux personnes physiques non résidentes en Tunisie..',
 
    D222: ' Taux de la retenue opérée',
    D223: '   Total des retenues opérées au titre des Rémunérations et primes attribuées aux membres des conseils, des directoires et des comités des sociétés servies aux personnes physiques non résidentes en Tunisie..'
  };
  fieldLabels23= {
    D230: 'Type enregistrement',
    D231: '     Total assiette des Rémunérations et primes attribuées aux membres des conseils, des directoires et des comités des sociétés servies aux personnes morales non résidentes en Tunisie..',
 
    D232: ' Taux de la retenue opérée',
    D233: '   Total des retenues opérées au titre des Rémunérations et primes attribuées aux membres des conseils, des directoires et des comités des sociétés servies aux personnes morales non résidentesen Tunisie'
  };
  fieldLabels24= {
    D240: 'Type enregistrement',
    D241: '     Total assiette des rémunérations servies aux salariés et aux non salariés en contrepartie d’un travail occasionnel ou accidentel en dehors de leur activité principale.',
 
    D242: ' Taux de la retenue opérée',
    D243: '   Total retenues opérées au titre des rémunérations servies aux salariés et aux non salariés en contrepartie d’un travail occasionnel ou accidentel en dehors de leur activité principale'
  };
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    /*form1 */ 
    this.declarationForm0 = new FormGroup({
      D010: new FormControl({value: '010', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D011: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D012: new FormControl({value: '00000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D013: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    /*form2*/
    this.declarationForm2 = new FormGroup({
      D020: new FormControl({value: '170', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D021: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D022: new FormControl({value: '02000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D023: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm3 = new FormGroup({
      D030: new FormControl({value: '300', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D031: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{20}$') // Exactement 15 caractères numériques
      ]),
      D032: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 5 caractères numériques
      ]),
      
    });
    this.declarationForm4 = new FormGroup({
      D040: new FormControl({value: '021', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D041: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D042: new FormControl({value: '01000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D043: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm5 = new FormGroup({
      D050: new FormControl({value: '022', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D051: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D052: new FormControl({value: '01000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D053: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm6 = new FormGroup({
      D060: new FormControl({value: '023', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D061: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D062: new FormControl({value: '01500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D063: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm7 = new FormGroup({
      D070: new FormControl({value: '024', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D071: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D072: new FormControl({value: '01500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D073: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm8 = new FormGroup({
      D080: new FormControl({value: '027', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D081: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D082: new FormControl({value: '01000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D083: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm9 = new FormGroup({
      D090: new FormControl({value: '030', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D091: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D092: new FormControl({value: '00300', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D093: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm10 = new FormGroup({
      D100: new FormControl({value: '400', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D101: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D102: new FormControl({value: '00500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D103: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm11 = new FormGroup({
      D110: new FormControl({value: '040', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D111: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D112: new FormControl({value: '00500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D113: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm12 = new FormGroup({
      D120: new FormControl({value: '260', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D121: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D122: new FormControl({value: '01000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D123: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm13 = new FormGroup({
      D130: new FormControl({value: '060', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D131: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D132: new FormControl({value: '02000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D133: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
      
    });
    this.declarationForm14 = new FormGroup({
      D140: new FormControl({value: '071', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D141: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D142: new FormControl({value: '02000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D143: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm15 = new FormGroup({
      D150: new FormControl({value: '072', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D151: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D152: new FormControl({value: '02000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D153: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm16 = new FormGroup({
      D160: new FormControl({value: '073', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D161: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D162: new FormControl({value: '02000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D163: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm17 = new FormGroup({
      D170: new FormControl({value: '074', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D171: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D172: new FormControl({value: '02000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D173: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm18 = new FormGroup({
      D180: new FormControl({value: '241', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D181: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D182: new FormControl({value: '01000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D183: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm19 = new FormGroup({
      D190: new FormControl({value: '242', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D191: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D192: new FormControl({value: '01000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D193: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    }); this.declarationForm20 = new FormGroup({
      D200: new FormControl({value: '091', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D201: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D202: new FormControl({value: '00500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D203: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm21 = new FormGroup({
      D210: new FormControl({value: '092', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D211: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D212: new FormControl({value: '02000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D213: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm22 = new FormGroup({
      D220: new FormControl({value: '093', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D221: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D222: new FormControl({value: '02000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D223: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm23 = new FormGroup({
      D230: new FormControl({value: '094', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D231: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D232: new FormControl({value: '02000', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D233: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
    this.declarationForm24= new FormGroup({
      D240: new FormControl({value: '100', disabled: true}, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3}$') // Exactement 3 caractères alphanumériques
      ]),
      D241: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ]),
      D242: new FormControl({value: '01500', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{5}$') // Exactement 5 caractères numériques
      ]),
      D243: new FormControl({value: ' ', disabled: true}, [
        Validators.required,
        Validators.pattern('^[0-9]{15}$') // Exactement 15 caractères numériques
      ])
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    
    if (this.isEditing) {
      this.declarationForm0.enable();
    } else {
      this.declarationForm0.disable();
    }
  } 
  toggleEdit2() {
    this.isEditing2 = !this.isEditing2;
    
    if (this.isEditing2) {
      this.declarationForm2.enable();
    } else {
      this.declarationForm2.disable();
    }
  }
  toggleEdit3() {
    this.isEditing3= !this.isEditing3;
    
    if (this.isEditing3) {
      this.declarationForm3.enable();
    } else {
      this.declarationForm3.disable();
    }
  }
  toggleEdit4() {
    this.isEditing4= !this.isEditing4;
    
    if (this.isEditing4) {
      this.declarationForm4.enable();
    } else {
      this.declarationForm4.disable();
    }
  }
  toggleEdit5() {
    this.isEditing5= !this.isEditing5;
    
    if (this.isEditing5) {
      this.declarationForm5.enable();
    } else {
      this.declarationForm5.disable();
    }
  }

  toggleEdit6() {
    this.isEditing6= !this.isEditing6;
    
    if (this.isEditing6) {
      this.declarationForm6.enable();
    } else {
      this.declarationForm6.disable();
    }
  }
  toggleEdit7() {
    this.isEditing7= !this.isEditing7;
    
    if (this.isEditing7) {
      this.declarationForm7.enable();
    } else {
      this.declarationForm7.disable();
    }
  }
  toggleEdit8() {
    this.isEditing8= !this.isEditing8;
    
    if (this.isEditing8) {
      this.declarationForm8.enable();
    } else {
      this.declarationForm8.disable();
    }
  }
  toggleEdit9() {
    this.isEditing9= !this.isEditing9;
    
    if (this.isEditing9) {
      this.declarationForm9.enable();
    } else {
      this.declarationForm9.disable();
    }
  }
  toggleEdit10() {
    this.isEditing10= !this.isEditing10;
    
    if (this.isEditing10) {
      this.declarationForm10.enable();
    } else {
      this.declarationForm10.disable();
    }
  }
  toggleEdit11() {
    this.isEditing11= !this.isEditing11;
    
    if (this.isEditing11) {
      this.declarationForm11.enable();
    } else {
      this.declarationForm11.disable();
    }
  }
  toggleEdit12() {
    this.isEditing12= !this.isEditing12;
    
    if (this.isEditing12) {
      this.declarationForm12.enable();
    } else {
      this.declarationForm12.disable();
    }
  }
  toggleEdit13() {
    this.isEditing13= !this.isEditing13;
    
    if (this.isEditing13) {
      this.declarationForm13.enable();
    } else {
      this.declarationForm13.disable();
    }
  }   toggleEdit14() {
    this.isEditing14= !this.isEditing14;
    
    if (this.isEditing14) {
      this.declarationForm14.enable();
    } else {
      this.declarationForm14.disable();
    }
  }  toggleEdit15() {
    this.isEditing15= !this.isEditing15;
    
    if (this.isEditing15) {
      this.declarationForm15.enable();
    } else {
      this.declarationForm15.disable();
    }
  }  toggleEdit16() {
    this.isEditing16= !this.isEditing16;
    
    if (this.isEditing16) {
      this.declarationForm16.enable();
    } else {
      this.declarationForm16.disable();
    }
  }
  toggleEdit17() {
    this.isEditing17= !this.isEditing17;
    
    if (this.isEditing17) {
      this.declarationForm11.enable();
    } else {
      this.declarationForm17.disable();
    }
  }  toggleEdit18() {
    this.isEditing18= !this.isEditing18;
    
    if (this.isEditing18) {
      this.declarationForm18.enable();
    } else {
      this.declarationForm18.disable();
    }
  }
  toggleEdit19() {
    this.isEditing19= !this.isEditing19;
    
    if (this.isEditing19) {
      this.declarationForm19.enable();
    } else {
      this.declarationForm19.disable();
    }
  }  toggleEdit22() {
    this.isEditing22= !this.isEditing22;
    
    if (this.isEditing22) {
      this.declarationForm22.enable();
    } else {
      this.declarationForm22.disable();
    }
  }
  toggleEdit23() {
    this.isEditing23= !this.isEditing23;
    
    if (this.isEditing23) {
      this.declarationForm23.enable();
    } else {
      this.declarationForm23.disable();
    }
  }
  toggleEdit24() {
    this.isEditing24= !this.isEditing24;
    
    if (this.isEditing24) {
      this.declarationForm24.enable();
    } else {
      this.declarationForm24.disable();
    }
  }
  toggleEdit21() {
    this.isEditing21= !this.isEditing21;
    
    if (this.isEditing21) {
      this.declarationForm21.enable();
    } else {
      this.declarationForm21.disable();
    }
  }
  toggleEdit20() {
    this.isEditing20= !this.isEditing20;
    
    if (this.isEditing20) {
      this.declarationForm20.enable();
    } else {
      this.declarationForm20.disable();
    }
  }
  onSubmit() {
    if (this.isEditing) {
      if (this.declarationForm0.valid) {
        this.successMessage = 'Formulaire soumis avec succès!';
        this.errorMessage = '';
        console.log('Formulaire soumis avec succès:');
        console.log(this.declarationForm0.value);
        this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
      } else {
        this.errorMessage = ' ';
        this.successMessage = '';
        Object.keys(this.declarationForm0.controls).forEach(field => {
          const control = this.declarationForm0.get(field);
          if (control.invalid) {
            control.markAsTouched();
            const fieldName = this.fieldLabels[field];
            const errors = Object.keys(control.errors).map(key => {
              switch (key) {
                case 'required':
                  return `Le champ "${fieldName}" est requis`;
                case 'pattern':
                  if (field === 'D010') {
                    return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                  } else if (field === 'D011' || field === 'D013') {
                    return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                  } else if (field === 'D012') {
                    return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                  }
                  return `Le format du champ "${fieldName}" est invalide`;
                default:
                  return '';
              }
            }).join(', ');

            this.errorMessage += ` ${errors}`;
          }
        });
      }
    } else {
      this.toggleEdit();
    }
  }
  onSubmit2() {
    if (this.isEditing2) {
      if (this.declarationForm2.valid) {
        this.successMessage = 'Formulaire soumis avec succès!';
        this.errorMessage2 = '';
        console.log('Formulaire soumis avec succès:');
        console.log(this.declarationForm2.value);
        this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
      } else {
        this.errorMessage2 = ' ';
        this.successMessage = '';
        Object.keys(this.declarationForm2.controls).forEach(field => {
          const control = this.declarationForm2.get(field);
          if (control.invalid) {
            control.markAsTouched();
            const fieldName = this.fieldLabels2[field];
            const errors = Object.keys(control.errors).map(key => {
              switch (key) {
                case 'required':
                  return `Le champ "${fieldName}" est requis`;
                case 'pattern':
                  if (field === 'D020') {
                    return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                  } else if (field === 'D021' || field === 'D023') {
                    return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                  } else if (field === 'D022') {
                    return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                  }
                  return `Le format du champ "${fieldName}" est invalide`;
                default:
                  return '';
              }
            }).join(', ');

            this.errorMessage2 += ` ${errors}`;
          }
        });
      }
    } else {
      this.toggleEdit2();
    }
  }










  onSubmit3() {
    if (this.isEditing3) {
      if (this.declarationForm3.valid) {
        this.successMessage = 'Formulaire soumis avec succès!';
        this.errorMessage3 = '';
        console.log('Formulaire soumis avec succès:');
        console.log(this.declarationForm3.value);
        this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
      } else {
        this.errorMessage3 = ' ';
        this.successMessage = '';
        Object.keys(this.declarationForm3.controls).forEach(field => {
          const control = this.declarationForm3.get(field);
          if (control.invalid) {
            control.markAsTouched();
            const fieldName = this.fieldLabels3[field];
            const errors = Object.keys(control.errors).map(key => {
              switch (key) {
                case 'required':
                  return `Le champ "${fieldName}" est requis`;
                case 'pattern':
                  if (field === 'D030') {
                    return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                  } else if (field === 'D031'  ) {
                    return `Le champ "${fieldName}" doit être numérique et de longueur 20`;
                  } else if (field === 'D032') {
                    return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                  }
                  return `Le format du champ "${fieldName}" est invalide`;
                default:
                  return '';
              }
            }).join(', ');

            this.errorMessage3 += ` ${errors}`;
          }
        });
      }
    } else {
      this.toggleEdit3();
    }
  }

onSubmit4( ){
  if (this.isEditing4) {
    if (this.declarationForm4.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage4 = '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm4.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage4 = ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm4.controls).forEach(field => {
        const control = this.declarationForm4.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels4[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D040') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D021' || field === 'D043') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D042') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage4 += ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit4();
  }
}


onSubmit5( ){
  if (this.isEditing5) {
    if (this.declarationForm5.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage5 = '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm5.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage5 = ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm5.controls).forEach(field => {
        const control = this.declarationForm5.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels5[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D050') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D051' || field === 'D053') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D052') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage5 += ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit5();
  }
}


onSubmit6( ){
  if (this.isEditing6) {
    if (this.declarationForm6.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage6 = '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm6.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage6 = ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm6.controls).forEach(field => {
        const control = this.declarationForm6.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels6[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D060') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D061' || field === 'D063') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D062') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage6 += ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit6();
  }
}




onSubmit7( ){
  if (this.isEditing7) {
    if (this.declarationForm7.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage7 = '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm7.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage7 = ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm7.controls).forEach(field => {
        const control = this.declarationForm7.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels7[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D070') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D071' || field === 'D073') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D072') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage7 += ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit7();
  }
}
onSubmit8( ){
  if (this.isEditing8) {
    if (this.declarationForm8.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage8= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm8.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage8= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm8.controls).forEach(field => {
        const control = this.declarationForm8.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels8[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D080') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D081' || field === 'D083') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D082') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage8+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit8();
  }
}
onSubmit9( ){
  if (this.isEditing9) {
    if (this.declarationForm9.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage9= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm9.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage9= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm9.controls).forEach(field => {
        const control = this.declarationForm9.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels9[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D090') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D091' || field === 'D093') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D092') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage9+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit9();
  }
}

onSubmit10( ){
  if (this.isEditing10) {
    if (this.declarationForm10.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage10= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm10.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage10= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm10.controls).forEach(field => {
        const control = this.declarationForm10.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels10[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D100') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D101' || field === 'D103') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D102') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage10+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit10();
  }}

onSubmit11( ){
  if (this.isEditing11) {
    if (this.declarationForm11.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage11= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm11.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage11= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm11.controls).forEach(field => {
        const control = this.declarationForm11.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels11[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D110') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D111' || field === 'D113') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D112') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage11+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit11();
  }
}

onSubmit12( ){
  if (this.isEditing12) {
    if (this.declarationForm12.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage12= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm12.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage12= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm12.controls).forEach(field => {
        const control = this.declarationForm12.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels12[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D120') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D121' || field === 'D123') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D122') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage12+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit12();
  }
}
onSubmit13( ){
  if (this.isEditing13) {
    if (this.declarationForm13.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage13= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm13.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage13= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm13.controls).forEach(field => {
        const control = this.declarationForm13.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels13[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D130') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D131' || field === 'D133') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D132') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage13+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit13();
  }
}
onSubmit14( ){
  if (this.isEditing14) {
    if (this.declarationForm14.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage14= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm14.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage14= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm14.controls).forEach(field => {
        const control = this.declarationForm14.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels14[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D140') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D141' || field === 'D143') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D142') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage14+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit14();
  }
}

onSubmit15( ){
  if (this.isEditing15) {
    if (this.declarationForm15.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage15= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm15.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage15= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm15.controls).forEach(field => {
        const control = this.declarationForm15.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels15[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D110') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D151' || field === 'D153') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D152') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage15+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit15();
  }
}
onSubmit16( ){
  if (this.isEditing16) {
    if (this.declarationForm16.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage16= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm16.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage16= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm16.controls).forEach(field => {
        const control = this.declarationForm16.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels16[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D160') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D161' || field === 'D163') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D162') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage16+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit16();
  }
}
onSubmit17( ){
  if (this.isEditing17) {
    if (this.declarationForm17.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage17= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm17.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage17= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm17.controls).forEach(field => {
        const control = this.declarationForm17.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels17[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D110') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D171' || field === 'D173') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D172') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage17+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit17();
  }
}

onSubmit18( ){
  if (this.isEditing18) {
    if (this.declarationForm18.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage18= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm18.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage18= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm18.controls).forEach(field => {
        const control = this.declarationForm18.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels18[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D180') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D181' || field === 'D183') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D182') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage18+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit18();
  }
}
onSubmit19( ){
  if (this.isEditing19) {
    if (this.declarationForm19.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage19= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm19.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage19= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm19.controls).forEach(field => {
        const control = this.declarationForm19.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels19[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D190') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D191' || field === 'D193') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D192') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage19+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit19();
  }
}
onSubmit20( ){
  if (this.isEditing20) {
    if (this.declarationForm20.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage20= '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm20.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage20= ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm20.controls).forEach(field => {
        const control = this.declarationForm20.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels20[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D200') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D201' || field === 'D203') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D202') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage20+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit20();
  }
}






onSubmit21() {
  if (this.isEditing21) {
    if (this.declarationForm21.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage21 = '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm21.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage21 = ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm21.controls).forEach(field => {
        const control = this.declarationForm21.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels21[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D0210') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D0211' || field === 'D0213') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D02121') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage21 += ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit21();
  }
}
onSubmit22() {
  if (this.isEditing22) {
    if (this.declarationForm22.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage22 = '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm22.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage22 = ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm22.controls).forEach(field => {
        const control = this.declarationForm22.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels22[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D0220') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D0221' || field === 'D0223') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D02222') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage22+= ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit22();
  }
}
onSubmit23() {
  if (this.isEditing23) {
    if (this.declarationForm23.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage23 = '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm23.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage23 = ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm23.controls).forEach(field => {
        const control = this.declarationForm23.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels23[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D0230') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D0231' || field === 'D0233') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D02323') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage23 += ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit23();
  }
}
onSubmit24() {
  if (this.isEditing24) {
    if (this.declarationForm24.valid) {
      this.successMessage = 'Formulaire soumis avec succès!';
      this.errorMessage24 = '';
      console.log('Formulaire soumis avec succès:');
      console.log(this.declarationForm24.value);
      this.snackBar.open(this.successMessage, 'Fermer', { duration: 3000 });
    } else {
      this.errorMessage24 = ' ';
      this.successMessage = '';
      Object.keys(this.declarationForm24.controls).forEach(field => {
        const control = this.declarationForm24.get(field);
        if (control.invalid) {
          control.markAsTouched();
          const fieldName = this.fieldLabels24[field];
          const errors = Object.keys(control.errors).map(key => {
            switch (key) {
              case 'required':
                return `Le champ "${fieldName}" est requis`;
              case 'pattern':
                if (field === 'D0240') {
                  return `Le champ "${fieldName}" doit être alphanumérique et de longueur 3`;
                } else if (field === 'D0241' || field === 'D0243') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 15`;
                } else if (field === 'D02424') {
                  return `Le champ "${fieldName}" doit être numérique et de longueur 5`;
                }
                return `Le format du champ "${fieldName}" est invalide`;
              default:
                return '';
            }
          }).join(', ');

          this.errorMessage24 += ` ${errors}`;
        }
      });
    }
  } else {
    this.toggleEdit24();
  }
}


}