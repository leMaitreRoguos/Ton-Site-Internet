import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PremenuComponent } from './premenu/premenu.component';
import { AccueilpartieoneComponent } from './accueilpartieone/accueilpartieone.component';
import { AccueilpartietwoComponent } from './accueilpartietwo/accueilpartietwo.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilpartiethreeComponent } from './accueilpartiethree/accueilpartiethree.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OutilsComponent } from './outils/outils.component';
import { PrestationsComponent } from './prestations/prestations.component';
import { DemandezDevisComponent } from './demandez-devis/demandez-devis.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PremenuComponent,
    AccueilpartieoneComponent,
    AccueilpartietwoComponent,
    FooterComponent,
    AccueilpartiethreeComponent,
    LandingPageComponent,
    OutilsComponent,
    PrestationsComponent,
    DemandezDevisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
