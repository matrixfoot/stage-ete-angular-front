import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ProfilComponent } from './profil/profil.component';
import { AboutComponent } from './about/about.component';
import { FiscalityComponent } from './fiscality/fiscality.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { SaisieComptableComponent } from './saisie-comptable/saisie-comptable.component';
import { SaisieManuelComponent } from './saisie-manuel/saisie-manuel.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    AboutComponent,FiscalityComponent,
    ComptabiliteComponent,
    SaisieComptableComponent,
    SaisieManuelComponent
  ],
  imports: [
    MatSnackBarModule,
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









