import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.scss']
})
export class RessourceComponent implements OnInit {
  lists:[];
  
  constructor(private router: Router, private route: ActivatedRoute, private configService: ConfigService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['data'] != null) {
        this.lists = JSON.parse(params['data']);
      }  
  });
  }
  displayDetail(id){
      let data = {
        filter: {
          _id: id
        }
      }
      this.configService.getDetailRessource(data).subscribe((result)=>{
        this.router.navigate(['/fiche', {'data': JSON.stringify(result['entries'][0])}]);
      })
    }
}
