import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!:Product;
  quantity!:FormControl;
  constructor() {
    this.quantity = new FormControl('1');
   }

  ngOnInit(): void {
    this.product.quantity = this.quantity.value as number;
  }

}
