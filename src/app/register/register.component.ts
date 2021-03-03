import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { config } from 'rxjs';
import { ConfigService } from '../config/config.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    ville: new FormControl(''),
    codePostal: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl('')
  })
  disabledSubmitButton: boolean = false;
  optionsSelect: Array<any>;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
  }
 
  onSubmit(){
    this.configService.addUser(this.register.value).subscribe((user) => {
      console.log(user);
    })
    
  }
}
