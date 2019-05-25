import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductService } from '../../services/product.service';
import { RouterModule, Routes } from '@angular/router';
import { FormModalComponent } from './form-modal/form-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from '../cart/cart.component';
import { CartModule } from '../cart/cart.module';
import { HttpClientModule } from '@angular/common/http'

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
    ProductListItemComponent, 
    FormModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  entryComponents: [
    FormModalComponent
  ]
})
export class ProductsModule { }
