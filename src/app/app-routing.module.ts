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

const routes: Routes = [
  { path:'accueil-component', component:  AccueilComponent},
  { path: 'contact-component', component: ContactComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'favoris-component', component: FavorisComponent },
  { path: 'historique-component', component: HistoriqueComponent },
  { path: 'ressource-component', component: RessourceComponent },
  { path: 'fiche-component', component: FicheComponent },
  { path: 'register-component', component: RegisterComponent },
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
