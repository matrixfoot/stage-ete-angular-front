import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import {ProfilComponent} from './profil/profil.component'
import {ContactComponent} from './contact/contact.component'
//import {ProfilComponent} from './profil/profil.component'

import { PourquoiComponent } from './pourquoi/pourquoi.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({ 
  declarations: [
    AppComponent,
    ProfilComponent,
    ContactComponent,
    PourquoiComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
