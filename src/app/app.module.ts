import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FavorisComponent } from './favoris/favoris.component';
import { HistoriqueComponent } from './historique/historique.component';
import { RessourceComponent } from './ressource/ressource.component';
import { FicheComponent } from './fiche/fiche.component';
import { RegisterComponent } from './register/register.component';
import { CreationRessourceComponent } from './creation-ressource/creation-ressource.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    LoginComponent,
    FavorisComponent,
    HistoriqueComponent,
    RessourceComponent,
    FicheComponent,
    RegisterComponent,
    CreationRessourceComponent
  ],
  imports: [
    BrowserModule, 
    MDBBootstrapModule.forRoot(), 
    RouterModule.forRoot([]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
