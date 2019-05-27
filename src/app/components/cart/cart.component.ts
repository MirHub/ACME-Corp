import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/products.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'acme-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartProducts: Product[] = [];


  constructor(private router: Router, private shoppingCartService: ShoppingCartService, private toasterService: ToasterService) {

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
  popToast= (text: string, text_d:string="") => {
    this.toasterService.pop('success', text, text_d);
  }
  ngOnInit() {

  }
  remove = (item) => {
    console.log(item.name);
    this.cartProducts.splice(item, 1);

    // this.shoppingCartService.removeProduct(item);
    this.popToast("Removed ",item.title);

  }

  increase = (item) => {
    let temp = Number(item.quantity);
    temp += 1;
    let avq = Number(item.stocklevel);
    if (temp > avq) {
      item.price = "";
    } else {
      item.quantity = String(temp);
      this.popToast("Added 1 more of ",item.title);
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
      this.popToast("Decreased the quantity of ",item.title);
    } 

  }

  buynow = (email: string) => {
    this.popToast("Send Email to ", email);
    this.shoppingCartService.buyAllNow(email);
  }

}
