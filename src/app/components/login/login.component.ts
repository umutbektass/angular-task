import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name!: string;
  surname!: string;


  saveLocalStrage(){
    if(this.name && this.surname){
    localStorage.setItem('AdSoyad',this.name +" " +this.surname);
    }}

}
