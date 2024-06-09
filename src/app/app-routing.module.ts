import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PourquoiComponent } from './pourquoi/pourquoi.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'pourquoi', component: PourquoiComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
