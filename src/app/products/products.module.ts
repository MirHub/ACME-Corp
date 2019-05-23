import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProdcutService } from './common_func/products.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products',
    component: ProductsComponent,
    children: [
    	{ path: '', component: ProductListComponent },]
  }
]
@NgModule({
  declarations: [
    ProductsComponent, 
    ProductListComponent, 
    ProductListItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ProdcutService
  ]
})
export class ProductsModule { }
