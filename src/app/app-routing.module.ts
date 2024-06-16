import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { ModiEventComponent } from './modi-event/modi-event.component';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import { ProfilComponent } from './profil/profil.component';
import { PourquoiComponent } from './pourquoi/pourquoi.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'calendar',component:CalendarComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'ajouterEvent', component : AjouterEventComponent},
  {path:'profil',component:ProfilComponent},
  {path:'modifierEvent',component:ModiEventComponent},
  {path : 'pourquoi', component : PourquoiComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
