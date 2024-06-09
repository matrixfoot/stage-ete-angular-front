import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import { ModiEventComponent } from './modi-event/modi-event.component';
const routes: Routes = [
  { path: 'calendar', component :  CalendarComponent },
  { path: 'ajoutEvent', component :   AjouterEventComponent },
  { path: 'modiEvent', component :    ModiEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
