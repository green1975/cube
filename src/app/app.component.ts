import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'realationnel';
  options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];  
  
  affichage:boolean = false;
  
  toggle() {
    (this.affichage == true)?this.affichage = false:this.affichage = true; 
  }
}
