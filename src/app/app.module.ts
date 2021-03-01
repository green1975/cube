import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FavorisComponent } from './favoris/favoris.component';
import { HistoriqueComponent } from './historique/historique.component';
import { RessourceComponent } from './ressource/ressource.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FicheComponent } from './fiche/fiche.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    LoginComponent,
    FavorisComponent,
    HistoriqueComponent,
    RessourceComponent,
    SearchResultComponent,
    FicheComponent
  ],
  imports: [
    BrowserModule, 
    MDBBootstrapModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
