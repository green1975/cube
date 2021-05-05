import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from './config/config.service';
import { DataSharingService } from './data-sharing.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  isUserLoggedIn:boolean = true;
  title = 'relationnel';
  options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];  
  affichage:boolean = false;
  constructor(private router: Router, private configService:ConfigService, private dataSharingService: DataSharingService) {
  //   this.dataSharingService.isUserLoggedIn.subscribe( value => {
  //     this.isUserLoggedIn = value;
  //     console.log(value);
      
  // });
  }
  ngOnInit() {
    
    window.addEventListener("click", () => {
      this.affichage = !this.affichage;
     });
  }
  toggle(event) {
    event.stopPropagation();
    (this.affichage == true)?this.affichage = false:this.affichage = true; 
  }
  deconnection(){
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/');
    this.dataSharingService.isUserLoggedIn.next(false);
  }
}
