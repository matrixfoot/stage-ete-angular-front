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
const routes: Routes = [
  {path:'reclamationsEnCours',component:ReclamationsEnCoursComponent},
  {path:'reclamationsTraitees',component:ReclamationsTraiteesComponent},
  {path:'candidatureEnExecution',component:CandidaturesEnCoursExecutionComponent},
  {path:'candidatureValidees',component:CandidaturesValideesComponent},
  {path:'copieFcValides',component:CopiesFichiersComptablesValidesComponent},
  {path:'fcEnExecution',component:FichiersComptablesEnCoursExecutionComponent},
  {path:'fcValides',component:FichiersComptablesValidesComponent},
  {path:'copieDfValides',component:CopiesDeclarationsFiscalesValidesComponent},
  {path:'dfEnExecution',component:DeclarationsFiscalesEnCoursExecutionComponent},
  {path:'dfValides',component:DeclarationsFiscalesValidesComponent},
  {path:'candidats',component:CandidatsComponent},
  {path:'consultants',component:ConsultantsComponent},
  {path:'collaborateurs',component:CollaborateursComponent},
  {path:'clientsSupprimesTemp',component:ClientsSupprimesTemporairementComponent},
  {path : 'utilisateursBloques',component : UtilisateursBloquesComponent},
  {path:'utilisateursActifs',component:UtilisateursActifsComponent},
  {path:'utilisateursConnectes',component:UtilisateursConnectesComponent},
  {path:'tousUtilisateurs',component:TousUtilisateursComponent},
  {path:'clientsAvecImpayes',component:ClientsAvecImpayesComponent},
  {path:'factureReglees', component: FactureRegleesComponent},
  {path:'facturesPerformats',component:FacturePerformatComponent},
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
  {path:'dossiersExecution', component:DossiersExecutionComponent},
  {path:'dossiersInstance',component:DossiersInstanceComponent},
  {path : 'dossiersOuverts',component:DossiersOuvertsComponent},
  {path : 'dossiersValides',component:DossiersValidesComponent},
  {path :'dsPasEncoreRegles',component:DsPasEncoreReglesComponent},
  {path : 'dsRegles',component:DsReglesComponent},
  {path :'dsMarquesPayes',component :DsMarquesPayesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
