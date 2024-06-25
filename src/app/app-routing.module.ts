
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CalendarComponent } from './calendar/calendar.component';
import { DeclarationFiscaleComponent } from './declaration-fiscale/declaration-fiscale.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 0522e5838c2304c135efa976ae1d54645fd852ff
import { AboutComponent } from './about/about.component';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import { ProfilComponent } from './profil/profil.component';
import { ModiEventComponent } from './modi-event/modi-event.component';
import { PourquoiComponent } from './pourquoi/pourquoi.component';
 
import { CompleteComponent } from './complete/complete.component';
import { ModifyPComponent } from './modify-p/modify-p.component';
 
 import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
 
import { FiscalityComponent } from './fiscality/fiscality.component';
import { ParametrageAdminComponent } from './parametrage-admin/parametrage-admin.component';
import { UserBordComponent } from './user-bord/user-bord.component';
<<<<<<< HEAD
 import { DeclarationmensuelleComponent } from './declarationmensuelle/declarationmensuelle.component';
 import { ListeComponent } from './liste/liste.component';
=======
import { ViewDecFiscComponent } from './view-dec-fisc/view-dec-fisc.component';
import { ViewDecompComponent } from './view-decomp/view-decomp.component';
>>>>>>> 0522e5838c2304c135efa976ae1d54645fd852ff

 import { RetenueSourceComponent } from './retenue-source/retenue-source.component';
 import { PartieCommuneComponent } from './partie-commune/partie-commune.component';
 import { LoyerComponent } from './loyer/loyer.component';

<<<<<<< HEAD
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

const routes: Routes = [
  {path:'calendar',component:CalendarComponent},
   {path:'about',component:AboutComponent},
=======
import { CollabBoardComponent } from './collab-board/collab-board.component';
import { SaisieComptableComponent } from './saisie-comptable/saisie-comptable.component';
import { SaisieManuelComponent } from './saisie-manuel/saisie-manuel.component';

const routes: Routes = [
  {path:'collab-board',component:CollabBoardComponent},
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
>>>>>>> 0522e5838c2304c135efa976ae1d54645fd852ff
  {path:'ajouterEvent', component : AjouterEventComponent},
  {path:'profil',component:ProfilComponent},
  {path:'modifierEvent',component:ModiEventComponent},
  {path : 'pourquoi', component : PourquoiComponent},
   {path : 'complete', component : CompleteComponent},
  {path : 'modifyP', component : ModifyPComponent},

  
   
   {path : 'comptabilité',component :ComptabiliteComponent},
  
  {path : 'fiscality',component :FiscalityComponent},
  {path : 'pAdmin',component :ParametrageAdminComponent},
  {path : 'userbord',component :UserBordComponent},
<<<<<<< HEAD
  {path : 'declaration',component : DeclarationFiscaleComponent},
   
  {path : 'declamensuelle',component :   DeclarationmensuelleComponent},
  {path : 'liste', component :  ListeComponent},
  {path : 'source', component :   RetenueSourceComponent},
  {path : 'select', component :   ListeComponent},
  {path : 'partiecommune', component :    PartieCommuneComponent},
  {path : 'loyer', component :    LoyerComponent},
  {path : 'horaire', component :     HoraireComponent},
  {path : 'montant', component :      MontantComponent},
  {path : 'rubrique', component :       RubriqueComponent},
  {path : 'tfp', component :        TFPComponent},
  {path : 'fob', component :         FoprolosComponent},
  {path : 'tva', component :    TVAComponent},
  {path : 'tcl', component :   TclComponent},
  {path : 'timbre', component :   TimbreComponent},
  {path : 'soutenu', component :     SoutenutvaComponent},
  {path : 'plus', component :      PlusComponent},
=======
  {path : 'viewFis',component :ViewDecFiscComponent},
  {path : 'viewDec',component :ViewDecompComponent},
  
  {path : 'saisiecomptab',component :SaisieComptableComponent},
  {path : 'saisieman',component :SaisieManuelComponent},

>>>>>>> 0522e5838c2304c135efa976ae1d54645fd852ff
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }