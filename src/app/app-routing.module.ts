
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DeclarationFiscaleComponent } from './declaration-fiscale/declaration-fiscale.component';
import { AboutComponent } from './about/about.component';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import { ProfilComponent } from './profil/profil.component';
import { ModiEventComponent } from './modi-event/modi-event.component';
import { PourquoiComponent } from './pourquoi/pourquoi.component';
 import { Select1Component } from './select1/select1.component';
import { CompleteComponent } from './complete/complete.component';
import { ModifyPComponent } from './modify-p/modify-p.component';
 
 import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
 
import { FiscalityComponent } from './fiscality/fiscality.component';
import { ParametrageAdminComponent } from './parametrage-admin/parametrage-admin.component';
import { UserBordComponent } from './user-bord/user-bord.component';
 import { DeclarationmensuelleComponent } from './declarationmensuelle/declarationmensuelle.component';
 import { ListeComponent } from './liste/liste.component';

 import { RetenueSourceComponent } from './retenue-source/retenue-source.component';
 import { PartieCommuneComponent } from './partie-commune/partie-commune.component';
 import { LoyerComponent } from './loyer/loyer.component';

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
  {path:'ajouterEvent', component : AjouterEventComponent},
  {path:'profil',component:ProfilComponent},
  {path:'modifierEvent',component:ModiEventComponent},
  {path : 'pourquoi', component : PourquoiComponent},
   {path : 'complete', component : CompleteComponent},
  {path : 'modifyP', component : ModifyPComponent},
  {path : 'select1', component : Select1Component},

  
   
   {path : 'comptabilité',component :ComptabiliteComponent},
  
  {path : 'fiscality',component :FiscalityComponent},
  {path : 'pAdmin',component :ParametrageAdminComponent},
  {path : 'userbord',component :UserBordComponent},
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
