import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

   search = new BehaviorSubject("")

  constructor(private http:HttpClient, private route:Router) { }


  //Http requests
  
  viewAllProducts(){

    return this.http.get('http://localhost:3000/products')
  }

addProduct(newproduct:any){

return this.http.post('http://localhost:3000/products',newproduct)
}


// to get single product data

viewproduct(id:any){

  return this.http.get("http://localhost:3000/products/"+id)
}


deleteproduct(id:any){

  return  this.http.delete("http://localhost:3000/products/"+id)

   
}


// update / edit product

updateProduct(id:any,data:any){
  return this.http.put("http://localhost:3000/products/"+id,data)
}

}
