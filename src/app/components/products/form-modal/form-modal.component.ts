import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html'
})


export class FormModalComponent {

  @Input() product:any;

  myForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private shoppingCartService: ShoppingCartService
  ) {
    this.createForm();
  }


  private createForm() {
    this.myForm = this.formBuilder.group({
      numberOfItems: ''
    });
  }


  submitForm() {
    console.log('form has been submitted');
    this.activeModal.close(this.myForm.value);
  }
  addToCart(){
    this.shoppingCartService.addProduct(this.product);
    console.log("Added to cart");
  }

}