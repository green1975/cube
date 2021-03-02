import { FormGroup, FormControl} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    sujet: new FormControl(''),
    message: new FormControl('')
  })
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  
  constructor() {}


  onSubmit() {
    console.log(this.contactForm.value);
  }

}
