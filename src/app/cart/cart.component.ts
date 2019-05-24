import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acme-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData: any[] = [
    {'name': 'Apple', 'quantity': 3, 'price': 1.10},
    {'name': 'Orange', 'quantity': 2, 'price': 1.99},
    {'name': 'Melon', 'quantity': 1, 'price': 3.22}
  ];
  constructor() { }

  ngOnInit() {
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