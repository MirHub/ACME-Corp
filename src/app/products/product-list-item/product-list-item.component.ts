import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'acme-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit() {
  }

}
