import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { ModiEventComponent } from './modi-event/modi-event.component';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import { ProfilComponent } from './profil/profil.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './click-outside.directive';
import { DisconnectedHomeNavComponent } from './disconnected-home-nav/disconnected-home-nav.component';
import { DisconnectedNotHomeNavComponent } from './disconnected-not-home-nav/disconnected-not-home-nav.component';
import { ConnectedHomeNavComponent } from './connected-home-nav/connected-home-nav.component';
import { ConnectedNotHomeNavComponent } from './connected-not-home-nav/connected-not-home-nav.component';
import { NavbarSwitcherComponent } from './navbar-switcher/navbar-switcher.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { UserBordComponent } from './user-bord/user-bord.component';
import { FiscalityComponent } from './fiscality/fiscality.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { DossiersInstanceComponent } from './dossiers-instance/dossiers-instance.component';
import { DossiersValidesComponent } from './dossiers-valides/dossiers-valides.component';
import { DossiersExecutionComponent } from './dossiers-execution/dossiers-execution.component';
import { DossiersOuvertsComponent } from './dossiers-ouverts/dossiers-ouverts.component';
import { DisplayRangePipe } from './display-range.pipe';
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
import { StatistiquesDetailleesComponent } from './statistiques-detaillees/statistiques-detaillees.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomeComponent,
    AboutComponent,
    AjouterEventComponent,
    ProfilComponent,
    ClickOutsideDirective,
    DisconnectedHomeNavComponent,
    DisconnectedNotHomeNavComponent,
    ConnectedHomeNavComponent,
    ConnectedNotHomeNavComponent,
    NavbarSwitcherComponent,
    FooterComponent,
    UserBordComponent,
    FiscalityComponent,
    ComptabiliteComponent,
    MenuLateralComponent,
    DossiersInstanceComponent,
    DossiersValidesComponent,
    DossiersExecutionComponent,
    DossiersOuvertsComponent,
    DisplayRangePipe,
    DsPasEncoreReglesComponent,
    DsReglesComponent,
    DsMarquesPayesComponent,
    FacturePerformatComponent,
    FactureRegleesComponent,
    ClientsAvecImpayesComponent,
    TousUtilisateursComponent,
    UtilisateursConnectesComponent,
    UtilisateursActifsComponent,
    UtilisateursBloquesComponent,
    ClientsSupprimesTemporairementComponent,
    CollaborateursComponent,
    ConsultantsComponent,
    CandidatsComponent,
    DeclarationsFiscalesValidesComponent,
    DeclarationsFiscalesEnCoursExecutionComponent,
    CopiesDeclarationsFiscalesValidesComponent,
    FichiersComptablesValidesComponent,
    FichiersComptablesEnCoursExecutionComponent,
    CopiesFichiersComptablesValidesComponent,
    CandidaturesValideesComponent,
    CandidaturesEnCoursExecutionComponent,
    ReclamationsTraiteesComponent,
    ReclamationsEnCoursComponent,
    StatistiquesDetailleesComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
