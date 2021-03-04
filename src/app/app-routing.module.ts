import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FavorisComponent } from './favoris/favoris.component';
import { HistoriqueComponent } from './historique/historique.component';
import { RessourceComponent } from './ressource/ressource.component';
import { FicheComponent } from './fiche/fiche.component';
import { RegisterComponent } from './register/register.component';
import { CreationRessourceComponent } from './creation-ressource/creation-ressource.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'accueil', component:  AccueilComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favoris', component: FavorisComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'ressource', component: RessourceComponent },
  { path: 'fiche', component: FicheComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'creation-ressource', component: CreationRessourceComponent },
];

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
