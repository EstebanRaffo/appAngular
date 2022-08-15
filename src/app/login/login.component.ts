import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Variable de Clase
  title = "Login" 
  modificado = false
  constructor() { }
  cambiarTitle(){
    this.title = "Login Angular"
    this.modificado = true
  }
  ngOnInit(): void {
  }

}
