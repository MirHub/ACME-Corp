import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    children: [
      { path: '', component: CartComponent },]
  }
]
@NgModule({
  declarations: [
    CartComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule, 
    ToasterModule.forRoot()
  ],
  providers: [
  ],
  entryComponents: [
    CartComponent
  ]
})
export class CartModule { }
