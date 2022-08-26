import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  orderForm!: FormGroup;
  @Input() cartItems:Product[] = [];
  total:number = 0.0;
  constructor(private _fb: FormBuilder,private _shoppingCartService:ShoppingCartService) {}

  ngOnInit(): void {
    this._shoppingCartService.getOrderList().subscribe(items => this.cartItems = items);
    this.cartItems.forEach(item => { this.total += (item.quantity * item.price)})
    this.orderForm = this._fb.group({
      firstName: ['',Validators.required],
      lastName: [''],
      address: this._fb.group({
        city: [''],
      }),
    });
    document.scrollingElement?.scroll(0, 0);

  }
  onSubmit() {
    window.alert('Thank you for buying in our shop!');
  }
  deleteOrderItem(index:string) {
    this.cartItems.splice(parseInt(index),1);

  }
  totalValue():number {
    this.total = 0.0;
    this.cartItems.forEach(item => { this.total += (item.quantity * item.price)})
    return this.total;
  }
}
