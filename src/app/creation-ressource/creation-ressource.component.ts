import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-creation-ressource',
  templateUrl: './creation-ressource.component.html',
  styleUrls: ['./creation-ressource.component.scss']
})
export class CreationRessourceComponent implements OnInit {
  categories: any;
  typeRelation: any;
  typeRessource: any;
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
  create = new FormGroup({
    categorie: new FormControl(''),
    relation: new FormControl(''),
    ressource: new FormControl(''),
    titre: new FormControl(''),
    description: new FormControl(''),
    document: new FormControl(''),
    youtube: new FormControl(''),
    texte: new FormControl('')
  })
  constructor(private configService:ConfigService) { }

  ngOnInit() {
    this.configService.getConfig()
      .subscribe(
        items => {
          this.categories = items['entries'];
        });
    this.configService.getConfig1()
  .subscribe(
    items1 => {
      
      this.typeRelation = items1['entries'];
    });
    this.configService.getConfig2()
  .subscribe(
    items2 => {
      
      this.typeRessource = items2['entries'];
    });
  }
  onSubmit() {
    console.log(this.create.value);
  }

}
