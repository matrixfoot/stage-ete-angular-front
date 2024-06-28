import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
=======
 
import { MaterialModule } from './material/material.module';
import { CompleteComponent } from './complete/complete.component';
import { ModifyPComponent } from './modify-p/modify-p.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChartModule} from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
>>>>>>> 51d6e2c1fe56299a47b366de92a14d237c786358
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
<<<<<<< HEAD
import { ProfilComponent } from './profil/profil.component';
=======
<<<<<<< HEAD
import { CalendarComponent } from './calendar/calendar.component';
 import { ModiEventComponent } from './modi-event/modi-event.component';
=======
import { HomeComponent } from './home/home.component';
import { ModiEventComponent } from './modi-event/modi-event.component';
>>>>>>> 0522e5838c2304c135efa976ae1d54645fd852ff
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
>>>>>>> 51d6e2c1fe56299a47b366de92a14d237c786358
import { AboutComponent } from './about/about.component';
import { FiscalityComponent } from './fiscality/fiscality.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
<<<<<<< HEAD
import { SaisieComptableComponent } from './saisie-comptable/saisie-comptable.component';
import { SaisieManuelComponent } from './saisie-manuel/saisie-manuel.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
=======
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
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DeclarationFiscaleComponent } from './declaration-fiscale/declaration-fiscale.component';
 import { DeclarationmensuelleComponent } from './declarationmensuelle/declarationmensuelle.component';
import { ListeComponent } from './liste/liste.component';
import { RetenueSourceComponent } from './retenue-source/retenue-source.component';
import { SelectComponent } from './select/select.component';
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
import { PlustvaComponent } from './plustva/plustva.component';
import { RubComponent } from './rub/rub.component';
import { Select1Component } from './select1/select1.component';
import { StatistiquesDetailleesComponent } from './statistiques-detaillees/statistiques-detaillees.component';
import { StatistiquesDernierMoisComponent } from './statistiques-dernier-mois/statistiques-dernier-mois.component';
import { StatistiquesDernierJourComponent } from './statistiques-dernier-jour/statistiques-dernier-jour.component';
import { ListeTransactionsComponent } from './liste-transactions/liste-transactions.component';
>>>>>>> 51d6e2c1fe56299a47b366de92a14d237c786358
@NgModule({
  declarations: [
    StatistiquesDetailleesComponent,
    AppComponent,
<<<<<<< HEAD
    ProfilComponent,
    AboutComponent,FiscalityComponent,
    ComptabiliteComponent,
    SaisieComptableComponent,
    SaisieManuelComponent
  ],
  imports: [
    MatSnackBarModule,
    ReactiveFormsModule,
=======
    CalendarComponent,
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
    AdminDashboardComponent,
    AppComponent,
    CalendarComponent,
    ModiEventComponent,AjouterEventComponent,ProfilComponent,AboutComponent, UserBordComponent, FiscalityComponent,
     ComptabiliteComponent, DeclarationFiscaleComponent,  DeclarationmensuelleComponent, ListeComponent, RetenueSourceComponent,PlusComponent,
      SelectComponent, PartieCommuneComponent, LoyerComponent, HoraireComponent, MontantComponent, RubriqueComponent, Select1Component,
      TFPComponent, FoprolosComponent, TVAComponent, TclComponent, TimbreComponent, SoutenutvaComponent, PlusComponent, PlustvaComponent, RubComponent, Select1Component, StatistiquesDetailleesComponent, StatistiquesDernierMoisComponent, StatistiquesDernierJourComponent, ListeTransactionsComponent,    
  ],
  imports: [
    HighchartsChartModule,
    ChartModule,
    BrowserModule,
>>>>>>> 51d6e2c1fe56299a47b366de92a14d237c786358
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    ReactiveFormsModule,
<<<<<<< HEAD
    FormsModule, MatSnackBarModule
=======
    FormsModule,
    MaterialModule,
>>>>>>> 0522e5838c2304c135efa976ae1d54645fd852ff
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }









