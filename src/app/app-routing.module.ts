import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { ModiEventComponent } from './modi-event/modi-event.component';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import { ProfilComponent } from './profil/profil.component';
import { PourquoiComponent } from './pourquoi/pourquoi.component';
import { AboutComponent } from './about/about.component';
import { UserBordComponent } from './user-bord/user-bord.component';
import { FiscalityComponent } from './fiscality/fiscality.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
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
  {path:'home',component:HomeComponent},
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
  {path :'• Liste des demandes de services marquées comme payées',component :DsMarquesPayesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
