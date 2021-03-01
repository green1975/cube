import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {
  lists = [
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfmkjbvfdmjvbfdmkvfdsvkdsdkmvnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfmkjbvfdmjvbfdmkvfdsvkdsdkmvnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfmkjbvfdmjvbfdmkvfdsvkdsdkmvnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfmkjbvfdmjvbfdmkvfdsvkdsdkmvnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfmkjbvfdmjvbfdmkvfdsvkdsdkmvnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfmkjbvfdmjvbfdmkvfdsvkdsdkmvnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfmkjbvfdmjvbfdmkvfdsvkdsdkmvnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfmkjbvfdmjvbfdmkvfdsvkdsdkmvnfsdjkvn"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
