import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
// El servicio es inyectable para que los compnentes lo puedan inyectar en su constructor y asi acceder a los metodos de ese
// servicio
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // title = "Angular 2022"
  // modificado = false
  // classInput = ""
  // op1 = 0
  // op2 = 0
  // resultado = 0
  // tamano:number = 18
  // productos=[
  //   {
  //     id:1,
  //     title:"moto g",
  //     price:100 
  //   },
  //   {
  //     id:2,
  //     title:"moto x",
  //     price:150 
  //   }
  // ]
  // categorias=[
  //   "celulares",
  //   "televisores"
  // ]

  productos:any = [] // any es el tipo: puede ser cualquier cosa
  productosAsync:any = []
  loading = true
  constructor(private productosServices: ProductosService) {
    // para ver el observable hasta que resuelva la llamada debe suscribirse, similar al .then de las promesas en JS
    this.productosServices.getAll().subscribe({
      next:(data:any)=>{
        console.log(data)
        this.productos = data.results
        this.loading = false
      },
      error:error=>{
        console.log(error)
      }
    })
    
    this.init()
  }
  async init(){
    try {
      const response:any = await this.productosServices.getAllPromise()
      this.productosAsync = response["results"]
    } catch (error) {
      
    }
  }
  
  // addProduct(){
  //   this.productos = [
  //     {
  //       id:3,
  //       title:"Nuevo Producto",
  //       price:200
  //     }
  //   ]
  // }
  // cambiarTitle(){
  //   if(this.title === ""){
  //     this.classInput = "error"
  //   }else{
  //     this.classInput = "ok"
  //   }
  //   this.title = "Angular 2022 Clase 2"
  //   this.modificado = true
  // }
  // calcular(){
  //   this.resultado = this.op1 + this.op2
  // }

  ngOnInit(): void {
  }

}
