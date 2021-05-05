import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { DataSharingService } from '../data-sharing.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  disabledSubmitButton: boolean = false;
  optionsSelect: Array<any>;
  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  
  constructor(private configService:ConfigService, private router: Router, private dataSharingService: DataSharingService) {}
  onSubmit(){
    let data = {
      filter: { mail: this.login.value.email},
      fields: {mail: 1, nom:1 },
      limit: 1
    }
    this.configService.login(data).subscribe((user => {
      if(user['entries'].length != 0) {
        sessionStorage.setItem('user', JSON.stringify(user['entries'][0]));
        this.router.navigateByUrl('/');
        this.dataSharingService.isUserLoggedIn.next(true);
        
      } else {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([this.router.url]);
      }
        
    }))
  }
}
