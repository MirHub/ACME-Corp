
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Product } from '../models/products.model';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ShoppingCartService {
  constructor(private httpclient: HttpClient) { }
  products: Product[] = [];

  addProduct = (_product: Product) => {
    console.log('in service');
    _product.quantity = "1";
    this.products.push(_product)


    return this.httpclient.post("/api/v1/shoppingcart", _product, { responseType: 'text' }).subscribe(res => console.log(res));

  }
  getShoppingCartProducts = (): Observable<any> =>{
    return this.httpclient.get("/api/v1/shoppingcart");
  }

  removeProduct= (_product: Product) => {
    this.products.splice(this.products.indexOf(_product),1);


    return this.httpclient.post("/api/v1/shoppingcart_r", _product, { responseType: 'text' }).subscribe(res => console.log(res));
  }

  buyAllNow= (email: String) =>{
    return this.httpclient.post("/api/v1/buynow", email, { responseType: 'text' }).subscribe(res => console.log(res));
  }

}

