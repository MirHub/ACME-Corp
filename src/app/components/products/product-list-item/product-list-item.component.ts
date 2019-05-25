import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'acme-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: any;
  constructor(private modalService: NgbModal) { }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalComponent);

    modalRef.componentInstance.product = this.product; 

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
}

  ngOnInit() {
  }
}
