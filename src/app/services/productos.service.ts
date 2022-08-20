import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  getAll(){
    // return [
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
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055")
    // http devuelve un observable que indica que en algún momento se resuelve la llamada
  }
  getAllPromise(){
    // lastValueFrom transforma el observable en un promise y puedo usar async await en el constructor de home
    return lastValueFrom(this.http.get("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055"))
  }
}
