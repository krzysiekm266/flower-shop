import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!:Product;
  @Output() addToCart = new EventEmitter<Product>();
  quantity:FormControl = new FormControl(1);
  @Input() bgColor:string = '';

  constructor() { }

  ngOnInit(): void {
    this.bgColor = 'var(--color-bg-'+ (this.product.category.toLowerCase().replace(' ','-')) +')';

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
  clickAddToCart() {
    const product:Product = {
      id:this.product.id,
      category:this.product.category,
      name:this.product.name,
      quantity:this.product.quantity,
      description:this.product.description,
      price:this.product.price,
      picturePath:this.product.picturePath
    };
    this.product.quantity = 1;
    this.addToCart.emit(product);

  }
}
