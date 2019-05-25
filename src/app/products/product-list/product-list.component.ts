import { Component, OnInit } from '@angular/core';
import { Product } from '../common_func/products.model';
import { ProductService } from '../common_func/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'acme-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] =[];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    const productObervable = this.productService.getProducts();
    productObervable.subscribe(
      (products: Product[]) => {
        this.products = products;
        
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("Observable Completed");
      }

    );
  }
  clickHandle(){
    console.log(this.products);
    this.router.navigate(['cart'], { state: this.products });
  }

}
