import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { __values } from 'tslib';

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
  getAllPipe(){
    // this.http.get("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055") devuelve un observable que pasa a ser el 
    // value y con map solo me devuelve results
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055").pipe(map((value:any)=>value.results))
  }
  create(data:any){
    return this.http.post("URL", data)
  }
  update(id:string,data:any){
    return this.http.put("URL/"+id, data)
  }
  delete(id:string){
    return this.http.delete("URL/"+id)
  }
}
