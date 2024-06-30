
import { InclureParamComponent } from './inclure-param/inclure-param.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import { ProfilComponent } from './profil/profil.component';
import { ModiEventComponent } from './modi-event/modi-event.component';
import { PourquoiComponent } from './pourquoi/pourquoi.component';
import { AddCollabComponent } from './add-collab/add-collab.component';
import { CompleteComponent } from './complete/complete.component';
import { ModifyPComponent } from './modify-p/modify-p.component';
import { MUserAdminComponent } from './m-user-admin/m-user-admin.component';
import { AffichageFormComponent } from './affichage-form/affichage-form.component';
import { CareerComponent } from './career/career.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { ContactComponent } from './contact/contact.component';
import { FiscalityComponent } from './fiscality/fiscality.component';
import { ParametrageAdminComponent } from './parametrage-admin/parametrage-admin.component';
import { UserBordComponent } from './user-bord/user-bord.component';
import { ViewDecFiscComponent } from './view-dec-fisc/view-dec-fisc.component';
import { ViewDecompComponent } from './view-decomp/view-decomp.component';


import { CollabBoardComponent } from './collab-board/collab-board.component';
import { SaisieComptableComponent } from './saisie-comptable/saisie-comptable.component';
import { SaisieManuelComponent } from './saisie-manuel/saisie-manuel.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ViewCondidateComponent } from './view-condidate/view-condidate.component';
import { ViewReclamationComponent } from './view-reclamation/view-reclamation.component';
import { ModifActualiteComponent } from './modif-actualite/modif-actualite.component';

const routes: Routes = [
  {path:'collab-board',component:CollabBoardComponent},
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'ajouterEvent', component : AjouterEventComponent},
  {path:'profil',component:ProfilComponent},
  {path:'modifierEvent',component:ModiEventComponent},
  {path : 'pourquoi', component : PourquoiComponent},
  {path : 'addCollab', component : AddCollabComponent},
  {path : 'complete', component : CompleteComponent},
  {path : 'modifyP', component : ModifyPComponent},
  {path : 'modifyUser', component : MUserAdminComponent},
  {path : 'affForm', component : AffichageFormComponent},
  {path : 'inclureP',component :InclureParamComponent},
  {path : 'career',component :CareerComponent},
  {path : 'comptabilité',component :ComptabiliteComponent},
  {path : 'contact',component :ContactComponent},
  {path : 'fiscality',component :FiscalityComponent},
  {path : 'pAdmin',component :ParametrageAdminComponent},
  {path : 'userbord',component :UserBordComponent},
  {path : 'viewFis',component :ViewDecFiscComponent},
  {path : 'viewDec',component :ViewDecompComponent},
  {path : 'coming-soon',component :ComingSoonComponent},
  {path : 'viewCond',component :ViewCondidateComponent},
  {path : 'viewRec',component :ViewReclamationComponent},
  {path : 'modifA',component :ModifActualiteComponent},
  
  {path : 'saisiecomptab',component :SaisieComptableComponent},
  {path : 'saisieman',component :SaisieManuelComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }