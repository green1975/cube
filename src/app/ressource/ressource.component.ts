import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.scss']
})
export class RessourceComponent implements OnInit {
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
