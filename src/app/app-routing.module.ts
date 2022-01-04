import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OutilsComponent } from './outils/outils.component';
import { PrestationsComponent } from './prestations/prestations.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path:'outils', component: OutilsComponent},
  {path:'prestations', component:PrestationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
