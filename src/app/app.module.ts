import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { MaterialModule } from './material/material.module';
import { CompleteComponent } from './complete/complete.component';
import { ModifyPComponent } from './modify-p/modify-p.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
 
 
 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar/calendar.component';
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
  import {UserBordComponent} from './user-bord/user-bord.component';
import { DeclarationFiscaleComponent } from './declaration-fiscale/declaration-fiscale.component';
import { FiscalityComponent } from './fiscality/fiscality.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
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
 
  

 @NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    
    ModiEventComponent,AjouterEventComponent,ProfilComponent,AboutComponent, UserBordComponent, FiscalityComponent,
     ComptabiliteComponent, DeclarationFiscaleComponent,  DeclarationmensuelleComponent, ListeComponent, RetenueSourceComponent,
      SelectComponent, PartieCommuneComponent, LoyerComponent, HoraireComponent, MontantComponent, RubriqueComponent, 
      TFPComponent, FoprolosComponent, TVAComponent, TclComponent, TimbreComponent, SoutenutvaComponent, PlusComponent, PlustvaComponent, RubComponent, Select1Component,    
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    ReactiveFormsModule,
    FormsModule, MatSnackBarModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }









