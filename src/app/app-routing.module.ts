import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DeclarationFiscaleComponent } from './declaration-fiscale/declaration-fiscale.component';
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
import { UtilisateursConnectesComponent } from './utilisateurs-connectes/utilisateurs-connectes.component';
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
 
 import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
 
import { FiscalityComponent } from './fiscality/fiscality.component';
import { ParametrageAdminComponent } from './parametrage-admin/parametrage-admin.component';
import { UserBordComponent } from './user-bord/user-bord.component';
 import { DeclarationmensuelleComponent } from './declarationmensuelle/declarationmensuelle.component';
 import { ListeComponent } from './liste/liste.component';

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

const routes: Routes = [
  {path:'adminDashboard',component:AdminDashboardComponent},
  {path:'• Réclamations en cours d\'execution',component:ReclamationsEnCoursComponent},
  {path:'• Réclamations traités',component:ReclamationsTraiteesComponent},
  {path:'• Liste des candidatures en cours d\'exécution',component:CandidaturesEnCoursExecutionComponent},
  {path:'• Liste des candidatures validés',component:CandidaturesValideesComponent},
  {path:'• Copies fichiers comptables validés',component:CopiesFichiersComptablesValidesComponent},
  {path:'• Fichiers comptables en cours d\'execution',component:FichiersComptablesEnCoursExecutionComponent},
  {path:'• Fichiers comptables validés',component:FichiersComptablesValidesComponent},
  {path:'• Copies déclarations fiscales validés',component:CopiesDeclarationsFiscalesValidesComponent},
  {path:'• Déclarations fiscales en cours d\'execution',component:DeclarationsFiscalesEnCoursExecutionComponent},
  {path:'• Déclarations fiscales validés',component:DeclarationsFiscalesValidesComponent},
  {path:'• Candidats',component:CandidatsComponent},
  {path:'• Consultants',component:ConsultantsComponent},
  {path:'• Collaborateurs',component:CollaborateursComponent},
  {path:'• Clients supprimés temporairement',component:ClientsSupprimesTemporairementComponent},
  {path : '• Clients bloqués',component : UtilisateursBloquesComponent},
  {path:'• Clients actifs',component:UtilisateursActifsComponent},
  {path:'• Utilisateurs connectés',component:UtilisateursConnectesComponent},
  {path:'• Tous les utilisateurs',component:TousUtilisateursComponent},
  {path:'• Liste des clients avec des impayés',component:ClientsAvecImpayesComponent},
  {path:'• Liste des factures règlées', component: FactureRegleesComponent},
  {path:'• Liste des factures performat générées',component:FacturePerformatComponent},
  {path:'calendar',component:CalendarComponent},
   {path:'about',component:AboutComponent},
  {path:'ajouterEvent', component : AjouterEventComponent},
  {path:'profil',component:ProfilComponent},
  {path:'modifierEvent',component:ModiEventComponent},
  {path : 'pourquoi', component : PourquoiComponent},
  {path:'userbord',component:UserBordComponent},
  {path:'fisc',component:FiscalityComponent},
  {path:'comptab',component:ComptabiliteComponent},
  {path:'• Dossiers en cours d\'exécution', component:DossiersExecutionComponent},
  {path:'• Dossiers en instance',component:DossiersInstanceComponent},
  {path : '• Dossiers ouverts',component:DossiersOuvertsComponent},
  {path : '• Dossiers validés pas encore affectés',component:DossiersValidesComponent},
  {path :'• Liste des demandes de services pas encore règlées',component:DsPasEncoreReglesComponent},
  {path : '• Liste des demandes de services règlées',component:DsReglesComponent},
  {path :'• Liste des demandes de services marquées comme payées',component :DsMarquesPayesComponent},
   {path : 'complete', component : CompleteComponent},
  {path : 'modifyP', component : ModifyPComponent},
  {path : 'select1', component : Select1Component},

  
   
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
