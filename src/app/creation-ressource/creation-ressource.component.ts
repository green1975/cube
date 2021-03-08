import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-creation-ressource',
  templateUrl: './creation-ressource.component.html',
  styleUrls: ['./creation-ressource.component.scss']
})
export class CreationRessourceComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  files  = [];
  categories: any;
  typeRelation: any;
  typeRessource: any;
  lists: any;
  // lists = [
  //   {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfmk jbvfdmjvbfd mkvfdsvkdsdkm vnfsdjkvn"},
  //   {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvb dfmkjbvf dmjvbfdmkvfdsvkdsd kmvnfsdjkvn"},
  //   {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbd fmkjbv fdmj vbfdmkvfds vkdsdkmv nfsdjkvn"},
  //   {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdf mkjbvfdm jvbfdmk vfdsvkd sdkmvnfsdjkvn"},
  //   {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbd fmkjbvfdmj vbfdmkvfds vkdsdkmvn fsdjkvn"},
  //   {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdv bdfmkjb vfdmjvbf dmkv fdsvkd sdkmvnfsdjkvn"},
  //   {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfm kjbvfdmjvb fdmkv fdsvkdsd kmvnfsd jkvn"},
  //   {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvb dfmkjb vfd mjvbfdm kvfdsvkd sdkmvnf sdjkvn"},
  // ]
  create = new FormGroup({
    categorie: new FormControl(''),
    relation: new FormControl(''),
    ressource: new FormControl(''),
    titre: new FormControl(''),
    description: new FormControl(''),
    file: new FormControl(''),
    fileSource: new FormControl(''),
    youtube: new FormControl(''),
    texte: new FormControl('')
  })
  selectedOption:string;
  
  constructor(private configService:ConfigService, private router: Router) { }

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
    this.configService.getRessource()
    .subscribe(
      ressources => {
        this.lists = ressources['entries'];
      }
    )
  }
  choixFormat(){
    console.log(this.selectedOption);
  }
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.create.patchValue({
        fileSource: file
      });
    }
  }
  onSubmit() {
    // const formData = new FormData(); 
    // formData.append('file', this.create.get('fileSource').value); 
    // if (formData != null){
    //   this.configService.sendFormData(formData).subscribe((result)=>{
    //     console.log(result);
    //   })
    // }
    let data = {
      data:{
        titre: this.create.value.titre,
        description: this.create.value.description,
        contenu: this.create.value.texte,
        categorieId: this.create.value.categorie,
        typeRelationId:this.create.value.relation,
        typeRessourceId:this.create.value.ressource
      }
    }
    this.configService.postRessource(data).subscribe((resourceResult) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([this.router.url]);
    })
  }

}
