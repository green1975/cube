import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';

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

  constructor(private configService: ConfigService, private router: Router) { }

  ngOnInit(): void {
  }
 
  onSubmit(){
    let data = {
      data:{
        nom: this.register.value.name,
        mail: this.register.value.name,
        ville: this.register.value.ville,
        code_postale: this.register.value.codePostal,
        password: this.register.value.password
    }
  }
    this.configService.addUser(data).subscribe((user) => {
      this.router.navigate(['/accueil']);
    })
    
  }
}
