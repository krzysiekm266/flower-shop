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
    if(this.product.quantity < 1000) {
      this.product.quantity++;
    }
  }
  decrease() {
    if(this.product.quantity > 1) {
      this.product.quantity--;
    }
  }
  increaseBy(value:number) {
    if(this.product.quantity < 1000) {
      this.product.quantity += value;
    }
  }
  decreaseBy(value:number) {
    if(this.product.quantity > value) {
      this.product.quantity -= value;
    }
  }
}
