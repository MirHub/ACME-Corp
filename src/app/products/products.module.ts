import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProdcutService } from './common_func/products.service';
import { RouterModule, Routes } from '@angular/router';
import { FormModalComponent } from './form-modal/form-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'products',
    component: ProductsComponent,
    children: [
    	{ path: '', component: ProductListComponent },]
  },
  {
    path: 'cart', component: ProductListComponent
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
    ReactiveFormsModule
  ],
  providers: [
    ProdcutService
  ],
  entryComponents: [
    FormModalComponent
  ]
})
export class ProductsModule { }
