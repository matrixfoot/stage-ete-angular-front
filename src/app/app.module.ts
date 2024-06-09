import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProfilComponent} from './profil/profil.component'
import {ContactComponent} from './contact/contact.component'
//import {ProfilComponent} from './profil/profil.component'

@NgModule({ 
  declarations: [
    AppComponent,
    ProfilComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
