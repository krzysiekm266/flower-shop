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

  }
  increase() {
    if(this.quantity.value < 1000) {
      this.quantity.setValue(this.quantity.value + 1 );
    }
  }
  decrease() {
    if(this.quantity.value > 1) {
      this.quantity.setValue(this.quantity.value - 1);
    }
  }
  increaseBy(value:number) {
    if(this.quantity.value < 1000) {
      this.quantity.setValue(this.quantity.value + value);
    }
  }
  decreaseBy(value:number) {
    if(this.quantity.value > value) {
      this.quantity.setValue(this.quantity.value - value);
    }
  }
}
