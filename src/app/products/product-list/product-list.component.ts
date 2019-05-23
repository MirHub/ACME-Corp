import { Component, OnInit } from '@angular/core';
import { Product } from '../common_func/products.model';
import { ProdcutService } from '../common_func/products.service';

@Component({
  selector: 'acme-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] =[];
  constructor(private listingService: ProdcutService) { }

  ngOnInit() {
    const productObervable = this.listingService.getListings();
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

}
