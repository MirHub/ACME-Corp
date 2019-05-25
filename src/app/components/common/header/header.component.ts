import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { ProductListComponent } from 'src/app/components/products/product-list/product-list.component';

@Component({
  selector: 'acme-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  changeRoute(route:string){

  }
  ngOnInit() {
  }

}
