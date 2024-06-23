import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { AboutComponent } from './about/about.component';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import { PourquoiComponent } from './pourquoi/pourquoi.component';
import { ModiEventComponent } from './modi-event/modi-event.component';
import { CareerComponent } from './career/career.component';
import { FiscalityComponent } from './fiscality/fiscality.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { SaisieComptableComponent } from './saisie-comptable/saisie-comptable.component';
import { SaisieManuelComponent} from './saisie-manuel/saisie-manuel.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},{ path: 'profil', component :ProfilComponent},
  { path: 'about', component :AboutComponent},{ path: 'ajouter-event', component :AjouterEventComponent},{ path: 'pourquoi', component :PourquoiComponent},{ path: 'modi-event', component :ModiEventComponent},
  { path: 'career', component :CareerComponent},
  { path: 'fiscality', component :FiscalityComponent},{ path: 'comptabilite', component :ComptabiliteComponent},{ path: 'saisie-comptable', component :SaisieComptableComponent},
  { path: 'saisie-manuel', component :SaisieManuelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
