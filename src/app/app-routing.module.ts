
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModiEventComponent } from './modi-event/modi-event.component';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import { ProfilComponent } from './profil/profil.component';
import { AboutComponent } from './about/about.component';
import { FiscalityComponent } from './fiscality/fiscality.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { SaisieComptableComponent } from './saisie-comptable/saisie-comptable.component';
import { SaisieManuelComponent } from './saisie-manuel/saisie-manuel.component';

const routes: Routes = [
  {path:'modi',component: ModiEventComponent},
  {path:'aj',component:  AjouterEventComponent},
  {path:'prof',component:   ProfilComponent},
    {path:'about',component:   AboutComponent  },
    {path:'fisc',component:  FiscalityComponent     },
    {path:'comptab',component:   ComptabiliteComponent     },{ path: 'saisie-comptable', component: SaisieComptableComponent },
    { path: '', redirectTo: '/saisie-comptable', pathMatch: 'full' }, // Optionnel: redirection vers saisie-comptable par défaut
    { path: '**', redirectTo: '/saisie-comptable' },
    {path:'saisiemanuel',component:   SaisieManuelComponent    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
