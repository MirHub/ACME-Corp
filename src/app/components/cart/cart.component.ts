import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/products.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'acme-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartProducts: Product[] = [];


  constructor(private router: Router, private shoppingCartService: ShoppingCartService) {

    const productObervable = shoppingCartService.getShoppingCartProducts();
    productObervable.subscribe(
      (products: Product[]) => {
        this.cartProducts = products;
        
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("Observable Completed");
      }
    );
    // var currentUser = JSON.parse(localStorage.getItem('products'));
    // console.log("Current ", currentUser);
    // this.cartProducts = currentUser;

  }

  ngOnInit() {

  }
  remove = (item) => {
    console.log(item.name);
    this.cartProducts.splice(item, 1);
    // this.shoppingCartService.removeProduct(item);
  }

  increase = (item) => {
    let temp = Number(item.quantity);
    temp += 1;
    let avq = Number(item.stocklevel);
    if (temp > avq) {
      item.price = "";
    } else {
      item.quantity = String(temp);
    }

  }
  decrease = (item) => {
    let temp = Number(item.quantity);
    temp -= 1;
    if (temp == 0) {
      this.cartProducts.splice(item, 1);
    }
    let avq = Number(item.stocklevel);
    if (temp < avq) {
      item.quantity = String(temp);
    } else {
      item.price = "";
      
    }

  }

  buynow = (item) => {
    this.shoppingCartService.buyAllNow(item);
  }

}
