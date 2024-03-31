import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Services {

  constructor( private http:HttpClient) { }
  
  productsUrl = 'https://fakestoreapi.com/products/category/electronics';


  allProducts():Observable<any>{
    return this.http.get<any>(this.productsUrl);
  }

  


  
}
