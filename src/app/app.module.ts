import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCollabComponent } from './add-collab/add-collab.component';
import { MaterialModule } from './material/material.module';
import { CompleteComponent } from './complete/complete.component';
import { ModifyPComponent } from './modify-p/modify-p.component';
import { MUserAdminComponent } from './m-user-admin/m-user-admin.component';
import { AffichageFormComponent } from './affichage-form/affichage-form.component';
import { InclureParamComponent } from './inclure-param/inclure-param.component';
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
import {CareerComponent} from './career/career.component';
import {ContactComponent} from './contact/contact.component';
import {UserBordComponent} from './user-bord/user-bord.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomeComponent,
    ModiEventComponent,AjouterEventComponent,ProfilComponent,AboutComponent, UserBordComponent, FiscalityComponent, ComptabiliteComponent
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }









