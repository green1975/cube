import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  categories: any;
  typeRelation: any;
  typeRessource: any;

  searchResult = new FormGroup({
    search: new FormControl(''),
    ressource: new FormControl(''),
    relation: new FormControl(''),
    categorie: new FormControl('')
  })

  constructor(
    private configService: ConfigService, private router: Router) {
  }   
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
    let data = {
      filter: {            
            typeRessourceId: this.searchResult.value.ressource  
        }
      }

    this.configService.search(data).subscribe((result)=>{
      this.router.navigate(['/ressource', { 'data': JSON.stringify(result['entries'])}])
    })
  }
}
