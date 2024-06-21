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
    ComptabiliteComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
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
