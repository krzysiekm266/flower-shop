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
  quantity:FormControl;
  constructor() {
    this.quantity = new FormControl(1);
   }

  ngOnInit(): void {

    // this.product.quantity = this.quantity.value as number;
  }
  add() {
    if(this.quantity.value < 10) {
      let value:number = this.quantity.value;
      value++;
      this.quantity.setValue(value);
    }
  }
  subtract() {
    if(this.quantity.value > 1) {
      let value:number = this.quantity.value;
      value--;
      this.quantity.setValue(value);
    }
  }
}
