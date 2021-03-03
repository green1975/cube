import { FormGroup, FormControl } from '@angular/forms';
import { Component, HostListener } from '@angular/core';

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
  })

  onSubmit(){
    console.log(this.login.value);
  }
}
