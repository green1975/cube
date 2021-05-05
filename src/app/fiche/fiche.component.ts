import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {
  detail:any;
  url:any;
  lists = [ 
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbd fmkjbvf dmjv bfdmkvfds vkdsdkmvn fsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvb dfmkjbvfd mjvbfdmkv fdsvk dsdkmvnfsd jkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfmk jbvfd mjvbfdmk vfds vkdsdkmvn fsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdf mkjbv fdmjvbfdmk vfdsvkds dkmvnf sdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdf mkjb vfdmjvbf dmkvfds vkdsdkm vnfs djkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfm kjbvfdmjvbfdm kvfdsv kdsdkm vnfsdj kvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbdfm kjbvfdmjvbfdm kvfd svkdsdkmv nfsdjkvn"},
    {titre: "test", categorie:"vie", relation:"social", ressource:"text", auteur:"moi", date:"27/12/2021", description:"kfdvbd fmkjbv fdmjv bfdmk vfdsvkdsd kmvnfsdjk vn"},
  ]
  constructor(private route: ActivatedRoute, private router: Router, private sanitize: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      if(!param) {
        this.detail = JSON.parse(param['data']);
        if(!this.detail.titre) {
          this.detail.titre = 'titre inconnu';
        }
      if(this.detail.typeRessourceId) {
        if(this.detail.typeRessourceId == 'Vidéos') {
          this.url = this.sanitize.bypassSecurityTrustResourceUrl(this.detail.contenu);
        }
      }
      }
    });
  }

}
