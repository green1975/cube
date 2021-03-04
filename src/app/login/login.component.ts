import { FormGroup, FormControl } from '@angular/forms';
import { Component, HostListener } from '@angular/core';
import { ConfigService } from '../config/config.service';

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
  
  constructor(private configService:ConfigService) {};
  onSubmit(){
    let data = {
      fields: {
        mail: this.login.value.email
      },
      limit: 1
    }
    this.configService.login(data).subscribe((user => {
      console.log(user);
    }))
  };
}
