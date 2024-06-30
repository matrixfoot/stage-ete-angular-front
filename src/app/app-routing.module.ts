import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { FiscalityComponent } from './fiscality/fiscality.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { CollabBoardComponent } from './collab-board/collab-board.component';
import { SaisieComptableComponent } from './saisie-comptable/saisie-comptable.component';
import { SaisieManuelComponent } from './saisie-manuel/saisie-manuel.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ViewCondidateComponent } from './view-condidate/view-condidate.component';
import { ViewReclamationComponent } from './view-reclamation/view-reclamation.component';
import { ModifActualiteComponent } from './modif-actualite/modif-actualite.component';


import { CalendarComponent } from './calendar/calendar.component';
import { DeclarationFiscaleComponent } from './declaration-fiscale/declaration-fiscale.component';

//import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import { ProfilComponent } from './profil/profil.component';
import { ModiEventComponent } from './modi-event/modi-event.component';
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
/* import { UtilisateursConnectesComponent } from './utilisateurs-connectes/utilisateurs-connectes.component'; */
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
/*   import { StatistiquesDetailleesComponent } from './statistiques-detaillees/statistiques-detaillees.component';
  import { StatistiquesDernierMoisComponent } from './statistiques-dernier-mois/statistiques-dernier-mois.component';
import { StatistiquesDernierJourComponent } from './statistiques-dernier-jour/statistiques-dernier-jour.component';
import { ListeTransactionsComponent } from './liste-transactions/liste-transactions.component'; */

  


const routes: Routes = [
  {path:'modi',component: ModiEventComponent},
  {path:'aj',component:  AjouterEventComponent},
  {path:'prof',component:   ProfilComponent},
    {path:'about',component:   AboutComponent  },
    {path:'fisc',component:  FiscalityComponent     },
    {path:'comptab',component:   ComptabiliteComponent     },{ path: 'saisie-comptable', component: SaisieComptableComponent },
     // Optionnel: redirection vers saisie-comptable par défaut
    /* { path: '**', redirectTo: '/saisie-comptable' }, */
    {path:'saisiemanuel',component:   SaisieManuelComponent    },
  {path:'collab-board',component:CollabBoardComponent},
 /*  {path:'',component:HomeComponent}, */
  {path:'about',component:AboutComponent},
  {path:'ajouterEvent', component : AjouterEventComponent},
  {path:'profil',component:ProfilComponent},
  {path:'modifierEvent',component:ModiEventComponent},
  {path : 'pourquoi', component : PourquoiComponent},
  {path:'userbord',component:UserBordComponent},
  {path:'fisc',component:FiscalityComponent},
  {path:'comptab',component:ComptabiliteComponent},
  {path:' DossiersEXec', component:DossiersExecutionComponent},
  {path:' DossiersIns',component:DossiersInstanceComponent},
  {path : ' DossiersOuv',component:DossiersOuvertsComponent},
  {path : 'DossiersValide',component:DossiersValidesComponent},
  {path :'ListePasReg',component:DsPasEncoreReglesComponent},
  {path : ' ListeRèglées',component:DsReglesComponent},
  {path :' ListeMarquéesPayées',component :DsMarquesPayesComponent},
   {path : 'complete', component : CompleteComponent},
  {path : 'modifyP', component : ModifyPComponent},
  { path: 'select1', component: Select1Component },
/*   {path:' ListeTrans',component:ListeTransactionsComponent},
  {path:'StatistiquesDernierJ',component:StatistiquesDernierJourComponent},
  {path:' StatistiquesDernierMois',component:StatistiquesDernierMoisComponent},
  {path:' StatistiquesDétaillées',component:StatistiquesDetailleesComponent}, */
  {path:'adminDashboard',component:AdminDashboardComponent},
  {path:' RéclamationsEn-coursexecution',component:ReclamationsEnCoursComponent},
  {path:' Réclamations-traités',component:ReclamationsTraiteesComponent},
  {path:' Liste-candidatures-exécution',component:CandidaturesEnCoursExecutionComponent},
  {path:' Liste-validés',component:CandidaturesValideesComponent},
  {path:' Copies-fichiers-validés',component:CopiesFichiersComptablesValidesComponent},
  {path:' Fichiers-comptables-en cours-execution',component:FichiersComptablesEnCoursExecutionComponent},
  {path:' Fichiers-comptables-validés',component:FichiersComptablesValidesComponent},
  {path:' Copies-déclarations-fiscales-validés',component:CopiesDeclarationsFiscalesValidesComponent},
  {path:' Déclarations-fiscales-en cours-execution',component:DeclarationsFiscalesEnCoursExecutionComponent},
  {path:' Déclarations-fiscales-validés',component:DeclarationsFiscalesValidesComponent},
  {path:' Candidats',component:CandidatsComponent},
  {path:' Consultants',component:ConsultantsComponent},
  {path:' Collaborateurs',component:CollaborateursComponent},
  {path:' Clients supprimés temporairement',component:ClientsSupprimesTemporairementComponent},
  {path : ' Clients bloqués',component : UtilisateursBloquesComponent},
  {path:' Clients actifs',component:UtilisateursActifsComponent},
  /* {path:' Utilisateurs connectés',component:UtilisateursConnectesComponent}, */
  {path:' Tous les utilisateurs',component:TousUtilisateursComponent},
  {path:' Liste-clients-avec-des impayés',component:ClientsAvecImpayesComponent},
  {path:' Liste-factures- règlées', component: FactureRegleesComponent},
  {path:' Liste-factures-performat-générées',component:FacturePerformatComponent},
  {path:'calendar',component:CalendarComponent},
   {path:'about',component:AboutComponent},


  
   
   {path : 'comptabilité',component :ComptabiliteComponent},
  
  {path : 'fiscality',component :FiscalityComponent},
  {path : 'pAdmin',component :ParametrageAdminComponent},
  {path : 'userbord',component :UserBordComponent},

  {path : 'declaration',component : DeclarationFiscaleComponent},
   
  {path : 'declamensuelle',component :   DeclarationmensuelleComponent},
  {path : 'liste', component :  ListeComponent},
  {path : 'source', component :   RetenueSourceComponent},
  {path : 'select', component :   ListeComponent},
  {path : 'partiecommune', component :    PartieCommuneComponent},
  {path : 'loyer', component :    LoyerComponent},
  {path : 'horaire', component :     HoraireComponent},
  {path : 'montant', component :      MontantComponent},
  {path : 'rubrique', component :       RubriqueComponent},
  {path : 'tfp', component :        TFPComponent},
  {path : 'fob', component :         FoprolosComponent},
  {path : 'tva', component :    TVAComponent},
  {path : 'tcl', component :   TclComponent},
  {path : 'timbre', component :   TimbreComponent},
  {path : 'soutenu', component :     SoutenutvaComponent},
  {path : 'plus', component :      PlusComponent},
  {path : 'viewFis',component :ViewDecFiscComponent},
  {path : 'viewDec',component :ViewDecompComponent},
  {path : 'coming-soon',component :ComingSoonComponent},
  {path : 'viewCond',component :ViewCondidateComponent},
  {path : 'viewRec',component :ViewReclamationComponent},
  {path : 'modifA',component :ModifActualiteComponent},
  
  {path : 'saisiecomptab',component :SaisieComptableComponent},
  {path : 'saisieman',component :SaisieManuelComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }