import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Angular 2022"
  modificado = false
  classInput = ""
  op1 = 0
  op2 = 0
  resultado = 0
  tamano:number = 18
  productos=[
    {
      id:1,
      title:"moto g",
      price:100 
    },
    {
      id:2,
      title:"moto x",
      price:150 
    }
  ]

  categorias=[
    "celulares",
    "televisores"
  ]

  constructor() { }
  addProduct(){
    this.productos = [
      {
        id:3,
        title:"Nuevo Producto",
        price:200
      }
    ]
  }
  cambiarTitle(){
    if(this.title === ""){
      this.classInput = "error"
    }else{
      this.classInput = "ok"
    }
    this.title = "Angular 2022 Clase 2"
    this.modificado = true
  }
  calcular(){
    this.resultado = this.op1 + this.op2
  }

  ngOnInit(): void {
  }

}
