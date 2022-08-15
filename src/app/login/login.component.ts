import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Variable de Clase
  title = "Login" 
  modificado = false
  myLogin:FormGroup

  constructor(private fl:FormBuilder) {
    this.myLogin = this.fl.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]]  
    })
  }
  
  login(){
    console.log(this.myLogin.value)
  }

  cambiarTitle(){
    this.title = "Login Angular"
    this.modificado = true
  }
  
  ngOnInit(): void {
  }

}
