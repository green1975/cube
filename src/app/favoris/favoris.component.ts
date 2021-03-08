import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {
  lists = [
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfm kjbvfdmj vbfdmkv fdsvkd sdkmvnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfm kjbvfdmjvbfdmkvfd svkdsdkm vnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfmkjbvf dmjvbfdmkvfdsvk dsd kmvnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfm kjbvfd mjvbfdmkvfdsvkdsd kmvnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbd fmkjb vfdmjvbf dmkvfds vkdsdkm vnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvb dfmkj bvfdm jvbfdmkvfd svkdsd kmvnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdf mkjbvf dmjvbf dmkvfdsv kdsdkmvnfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvb dfmk jbvfdmjv bfdmkvfd svkdsdkmvnfsdjkvn"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
