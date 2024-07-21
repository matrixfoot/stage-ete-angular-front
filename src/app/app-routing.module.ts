import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RSComponent } from './rs/rs.component';
import { TaxWizardComponentComponent } from './tax-wizard-component/tax-wizard-component.component';
import { FiscalityComponent } from './fiscality/fiscality.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { CollabBoardComponent } from './collab-board/collab-board.component';
import { SaisieComptableComponent } from './saisie-comptable/saisie-comptable.component';
import { SaisieManuelComponent } from './saisie-manuel/saisie-manuel.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ViewCondidateComponent } from './view-condidate/view-condidate.component';
import { ViewReclamationComponent } from './view-reclamation/view-reclamation.component';

import { FactureComponent } from './facturation/facture/facture.component';
import { FactureProformaComponent } from './facturation/facture-proforma/facture-proforma.component';
import { DevisComponent } from './facturation/devis/devis.component';
import { InvoiceGeneratorComponent } from './facturation/invoice-generator/invoice-generator.component';
import { ModifActualiteComponent } from './modif-actualite/modif-actualite.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DeclarationFiscaleComponent } from './declaration-fiscale/declaration-fiscale.component';
import { AboutComponent } from './about/about.component';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import { ProfilComponent } from './profil/profil.component';
import { ModiEventComponent } from './modi-event/modi-event.component';
import { StatistiquesDetailleesComponent } from './statistiques-detaillees/statistiques-detaillees.component';
import { StatistiquesDernierMoisComponent } from './statistiques-dernier-mois/statistiques-dernier-mois.component';
import { StatistiquesDernierJourComponent } from './statistiques-dernier-jour/statistiques-dernier-jour.component';
import { ListeTransactionsComponent } from './liste-transactions/liste-transactions.component';
import { PourquoiComponent } from './pourquoi/pourquoi.component';
import { DossiersExecutionComponent } from './dossiers-execution/dossiers-execution.component';
import { DossiersInstanceComponent } from './dossiers-instance/dossiers-instance.component';
import { DossiersOuvertsComponent } from './dossiers-ouverts/dossiers-ouverts.component';
import { DossiersValidesComponent } from './dossiers-valides/dossiers-valides.component';
import { DsPasEncoreReglesComponent } from './ds-pas-encore-regles/ds-pas-encore-regles.component';
import { DsReglesComponent } from './ds-regles/ds-regles.component';
import { DsMarquesPayesComponent } from './ds-marques-payes/ds-marques-payes.component';
import { FacturePerformatComponent } from './facture-performat/facture-performat.component';
import { FactureRegleesComponent } from './facture-reglees/facture-reglees.component';
import { ClientsAvecImpayesComponent } from './clients-avec-impayes/clients-avec-impayes.component';
import { TousUtilisateursComponent } from './tous-utilisateurs/tous-utilisateurs.component';
import { UtilisateursActifsComponent } from './utilisateurs-actifs/utilisateurs-actifs.component';
import { UtilisateursBloquesComponent } from './utilisateurs-bloques/utilisateurs-bloques.component';
import { ClientsSupprimesTemporairementComponent } from './clients-supprimes-temporairement/clients-supprimes-temporairement.component';
import { CollaborateursComponent } from './collaborateurs/collaborateurs.component';
import { ConsultantsComponent } from './consultants/consultants.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { DeclarationsFiscalesValidesComponent } from './declarations-fiscales-valides/declarations-fiscales-valides.component';
import { DeclarationsFiscalesEnCoursExecutionComponent } from './declarations-fiscales-en-cours-execution/declarations-fiscales-en-cours-execution.component';
import { CopiesDeclarationsFiscalesValidesComponent } from './copies-declarations-fiscales-valides/copies-declarations-fiscales-valides.component';
import { FichiersComptablesValidesComponent } from './fichiers-comptables-valides/fichiers-comptables-valides.component';
import { FichiersComptablesEnCoursExecutionComponent } from './fichiers-comptables-en-cours-execution/fichiers-comptables-en-cours-execution.component';
import { CopiesFichiersComptablesValidesComponent } from './copies-fichiers-comptables-valides/copies-fichiers-comptables-valides.component';
import { CandidaturesValideesComponent } from './candidatures-validees/candidatures-validees.component';
import { CandidaturesEnCoursExecutionComponent } from './candidatures-en-cours-execution/candidatures-en-cours-execution.component';
import { ReclamationsTraiteesComponent } from './reclamations-traitees/reclamations-traitees.component';
import { ReclamationsEnCoursComponent } from './reclamations-en-cours/reclamations-en-cours.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { Select1Component } from './select1/select1.component';
import { CompleteComponent } from './complete/complete.component';
import { ModifyPComponent } from './modify-p/modify-p.component';
import { ParametrageAdminComponent } from './parametrage-admin/parametrage-admin.component';
import { UserBordComponent } from './user-bord/user-bord.component';
import { DeclarationmensuelleComponent } from './declarationmensuelle/declarationmensuelle.component';
import { ListeComponent } from './liste/liste.component';
import { ViewDecFiscComponent } from './view-dec-fisc/view-dec-fisc.component';
import { ViewDecompComponent } from './view-decomp/view-decomp.component';
import { RetenueSourceComponent } from './retenue-source/retenue-source.component';
import { PartieCommuneComponent } from './partie-commune/partie-commune.component';
import { LoyerComponent } from './loyer/loyer.component';
import { HoraireComponent } from './horaire/horaire.component';
import { MontantComponent } from './montant/montant.component';
import { RubriqueComponent } from './rubrique/rubrique.component';
import { TFPComponent } from './tfp/tfp.component';
import { FoprolosComponent } from './foprolos/foprolos.component';
import { TVAComponent } from './tva/tva.component';
import { TclComponent } from './tcl/tcl.component';
import { TimbreComponent } from './timbre/timbre.component';
import { SoutenutvaComponent } from './soutenutva/soutenutva.component';
import { PlusComponent } from './plus/plus.component';
import { PageGardeComponent } from './page-garde/page-garde.component';
import { TFPCompComponent } from './tfp-comp/tfp-comp.component';
import { FOPROLOSCOMPOComponent } from './foprolos-compo/foprolos-compo.component';
import { TVA1Component } from './tva1/tva1.component';
import { TVA2Component } from './tva2/tva2.component';
import { DTCOMPComponent } from './dt-comp/dt-comp.component';
import { TCL1Component } from './tcl1/tcl1.component';
import { TCL2Component } from './tcl2/tcl2.component';
import { TCL3Component } from './tcl3/tcl3.component';
import { PageGarde2Component } from './page-garde2/page-garde2.component';
import { HomeComponent } from './home/home.component';
import { UtilisateursConnectesComponent } from './utilisateurs-connectes/utilisateurs-connectes.component';
import { SaisieAutoBanqueComponent } from './saisie-auto-banque/saisie-auto-banque.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { SaisieProvComponent } from './saisie-prov/saisie-prov.component';
import { Prov4Component } from './prov4/prov4.component';
import { Prov3Component } from './prov3/prov3.component';
import { Prov2Component } from './prov2/prov2.component';
import { Prov1Component } from './prov1/prov1.component';
import { BCDDEBComponent } from './bcddeb/bcddeb.component';
import { BCDDETComponent } from './bcddet/bcddet.component';
import { FACDETComponent } from './facdet/facdet.component';
const routes: Routes = [
  {path:'formulaireSprint6',component : FormulaireComponent},
  {path:'saisie-auto-banque',component:SaisieAutoBanqueComponent},
  { path: 'tax-wizard', component: TaxWizardComponentComponent },
    {path : 'TT',component :TaxWizardComponentComponent },
  {path:'parametrage-admin',component:ParametrageAdminComponent},
  {path:'• Liste des transactions',component:ListeTransactionsComponent},
  {path:'• Statistiques dernier jour',component:StatistiquesDernierJourComponent},
  {path:'• Statistiques dernier mois',component:StatistiquesDernierMoisComponent},
  {path:'• Statistiques détaillées',component:StatistiquesDetailleesComponent},
  {path:'• Copies fichiers comptables validés',component:CopiesFichiersComptablesValidesComponent},
  {path:'• Fichiers comptables en cours d\'execution',component:FichiersComptablesEnCoursExecutionComponent},
  {path:'• Fichiers comptables validés',component:FichiersComptablesValidesComponent},
  {path:'• Copies déclarations fiscales validés',component:CopiesDeclarationsFiscalesValidesComponent},
  {path:'• Liste des factures règlées',component:FactureRegleesComponent},
  { path: '• Liste des factures performat générées', component: FacturePerformatComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'• Utilisateurs connectés',component:UtilisateursConnectesComponent},
  { path: 'modi', component: ModiEventComponent },
  { path: 'aj', component: AjouterEventComponent },
  { path: 'prof', component: ProfilComponent },
  { path: 'about', component: AboutComponent },
  { path: 'fichierrecap', component: FichiersComptablesEnCoursExecutionComponent },
  { path: 'fisc', component: FiscalityComponent },
  { path: 'facture', component: FactureComponent},
  { path: 'facture-proforma', component: FactureProformaComponent },
  { path: 'devis', component: DevisComponent },
  { path: 'invoice', component: InvoiceGeneratorComponent },
  { path: 'comptab', component: ComptabiliteComponent },
  { path: 'saisie-comptable', component: SaisieComptableComponent },
  { path: 'saisiemanuel', component: SaisieManuelComponent },
  { path: 'collab-board', component: CollabBoardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ajouterEvent', component: AjouterEventComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'modifierEvent', component: ModiEventComponent },
  { path: 'pourquoi', component: PourquoiComponent },
  { path: 'userbord', component: UserBordComponent },
  { path: '• Dossiers en cours d\'exécution', component: DossiersExecutionComponent },
  { path: '• Dossiers en instance', component: DossiersInstanceComponent },
  { path: '• Dossiers ouverts', component: DossiersOuvertsComponent },
  { path: '• Dossiers validés pas encore affectés', component: DossiersValidesComponent },
  { path: '• Liste des demandes de services pas encore règlées', component: DsPasEncoreReglesComponent },
  { path: '• Liste des demandes de services règlées', component: DsReglesComponent },
  { path: '• Liste des demandes de services marquées comme payées', component: DsMarquesPayesComponent },
  { path: 'complete', component: CompleteComponent },
  { path: 'modifyP', component: ModifyPComponent },
  { path: 'select1', component: Select1Component },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'declarationfiscale', component: DeclarationFiscaleComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'modif-actualite', component: ModifActualiteComponent },
  { path: 'view-reclamation', component: ViewReclamationComponent },
  { path: 'view-condidate', component: ViewCondidateComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'rs', component: RSComponent },
  { path: 'declaration-mensuelle', component: DeclarationmensuelleComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'view-dec-fisc', component: ViewDecFiscComponent },
  { path: 'view-decomp', component: ViewDecompComponent },
  { path: 'retenue-source', component: RetenueSourceComponent },
  { path: 'partie-commune', component: PartieCommuneComponent },
  { path: 'loyer', component: LoyerComponent },
  { path: 'horaire', component: HoraireComponent },
  { path: 'montant', component: MontantComponent },
  { path: 'rubrique', component: RubriqueComponent },
  { path: 'tfp', component: TFPComponent },
    {path:'RS',component:RSComponent},
   {path:'TFPc',component:TFPCompComponent},
   {path:'FOPRCOm',component:FOPROLOSCOMPOComponent},
   {path:'TVA1',component:TVA1Component},
   {path:'TVA2',component:TVA2Component},
   {path:'DT',component:DTCOMPComponent},
   {path:'TCL1',component:TCL1Component},
   {path:'TCL2',component:TCL2Component},
   {path:'TCL3',component:TCL3Component},
  { path: 'foprolos', component: FoprolosComponent },
  { path: 'tva', component: TVAComponent },
  { path: 'tcl', component: TclComponent },
  { path: 'timbre', component: TimbreComponent },
  { path: 'soutenutva', component: SoutenutvaComponent },
  { path: 'plus', component: PlusComponent },
  { path: 'page-garde', component: PageGardeComponent },
  { path: 'tfp-comp', component: TFPCompComponent },
  { path: 'foprolos-compo', component: FOPROLOSCOMPOComponent },
  { path: 'tva1', component: TVA1Component },
  { path: 'tva2', component: TVA2Component },
  { path: 'dt-comp', component: DTCOMPComponent },
  { path: 'tcl1', component: TCL1Component },
  { path: 'tcl2', component: TCL2Component },
  { path: 'tcl3', component: TCL3Component },
  { path: 'page-garde2', component: PageGarde2Component },
  { path: '• Liste des candidatures en cours d\'exécution', component: CandidaturesEnCoursExecutionComponent },
  { path: '• Liste des candidatures validés', component: CandidaturesValideesComponent },
  { path: '• Réclamations en cours d\'execution', component: ReclamationsEnCoursComponent },
  { path: '• Réclamations traités', component: ReclamationsTraiteesComponent },
  { path: '• Déclarations fiscales en cours d\'execution', component: DeclarationsFiscalesEnCoursExecutionComponent },
  { path: '• Déclarations fiscales validés', component: DeclarationsFiscalesValidesComponent },
  { path: '• Collaborateurs', component: CollaborateursComponent },
  { path: '• Consultants', component: ConsultantsComponent },
  { path: '• Candidats', component: CandidatsComponent },
  { path: '• Clients supprimés temporairement', component: ClientsSupprimesTemporairementComponent },
  { path: '• Clients bloqués', component: UtilisateursBloquesComponent },
  { path: '• Clients actifs', component: UtilisateursActifsComponent },
  { path: 'tous-utilisateurs', component: TousUtilisateursComponent },
  { path: '• Liste des clients avec des impayés', component: ClientsAvecImpayesComponent },
  { path: 'adminDashboard', redirectTo: 'admin-dashboard' },
  { path: 'PR', component:SaisieProvComponent  },
  { path: 'PR4', component:Prov4Component  },
  { path: 'PR3', component:Prov3Component  },
  { path: 'PR2', component:Prov2Component  },
  { path: 'PR1', component:Prov1Component  },
  { path: 'BCDDEB', component:BCDDEBComponent  },
  { path: 'BCDDET', component:BCDDETComponent  },
  { path: 'FACDET', component:FACDETComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
