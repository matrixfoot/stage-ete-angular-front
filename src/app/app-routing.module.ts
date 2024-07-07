import { Component, NgModule } from '@angular/core';

import { InclureParamComponent } from './inclure-param/inclure-param.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModiEventComponent } from './modi-event/modi-event.component';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import { ProfilComponent } from './profil/profil.component';
 import { AboutComponent } from './about/about.component';
 import { UserBordComponent } from './user-bord/user-bord.component';
 import { FiscalityComponent } from './fiscality/fiscality.component';
 import { ComptabiliteComponent } from './comptabilite/comptabilite.component';

const routes: Routes = [
  {path:'modi',component: ModiEventComponent},
  {path:'aj',component:  AjouterEventComponent},
  {path:'prof',component:   ProfilComponent},
    {path:'about',component:   AboutComponent  },
    {path:'fisc',component:  FiscalityComponent     },
    {path:'comptab',component:   ComptabiliteComponent     },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }