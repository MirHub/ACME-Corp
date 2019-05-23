import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ProdcutService } from './products/common_func/products.service';
import { ProductsModule } from './products/products.module';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './products/form-modal/form-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'}
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
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
