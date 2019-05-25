import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { ProductService } from './services/product.service';
import { ProductsModule } from './components/products/products.module';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './components/products/form-modal/form-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { CartModule } from './components/cart/cart.module';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {
    path: 'cart', component: CartComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
    CartModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
