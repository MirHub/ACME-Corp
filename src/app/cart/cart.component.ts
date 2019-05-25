import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products/common_func/products.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'acme-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[];
  cartData: any[] = [
    {'name': 'P1', 'quantity': 3, 'price': 1.10, description:'P1 Description'},
    {'name': 'P1', 'quantity': 2, 'price': 1.99},
    {'name': 'P2', 'quantity': 1, 'price': 3.22}
  ];

  constructor(private router: Router) { 
    this.cartProducts = <Product[]>this.router.getCurrentNavigation().extras.state
  }

  ngOnInit() {
    if(this.cartProducts == null){
      console.log("Empty cart");
    }
  }
  remove = function(item) {
    console.log(item.name);
    this.cartData.splice(item, 1);
  }
  
  add = function() {
    var newItem = {
      'name': this.item, 
      'quantity': this.quantity, 
      'price': this.price
    };
    
    this.cartData.push(newItem);
  }
  increase = function(item) {
    item.quantity += 1;

  }

  
}
