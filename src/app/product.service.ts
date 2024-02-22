import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get('https://dummyjson.com/products');

  }

  getSearchProduct(name:any){
    return this.http.get(`https://dummyjson.com/products/search?q=${name}`);
  }

  getCategoryProducts(category:any){
    return this.http.get(`https://dummyjson.com/products/category/${category}`)
  }
}
