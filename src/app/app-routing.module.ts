import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PourquoiComponent } from './pourquoi/pourquoi.component';
import { AboutComponent } from './about/about.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'pourquoi', component: PourquoiComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
