import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { tap } from "rxjs/operators";

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
    this.cartItems.forEach(item => { this.total += (item.quantity * item.price)});
    this.orderForm = this._fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      address: this._fb.group({
        city: ['',Validators.required],
      }),
    });
    this.disableEmptyOrderForm();
    document.scrollingElement?.scroll(0, 0);

  }
  private disableEmptyOrderForm() {
    this.cartItems.length > 0 ? this.orderForm.enable() : this.orderForm.disable();

  }
  onSubmit() {
    this._shoppingCartService.confirmOrder().subscribe();
    this.orderForm.reset('');
    window.alert('Thank you for buying in our shop!');


  }
  orderItemQuantityIncrease(index:string) {
    this.cartItems[(index as unknown as number)].quantity++;
  }
  orderItemQuantityDecrease(index:string) {
    if( this.cartItems[(index as unknown as number)].quantity > 1 )
     this.cartItems[(index as unknown as number)].quantity--;

  }
  deleteOrderItem(index:string) {

    this._shoppingCartService.deleteItem(index as unknown as number ).subscribe();
    this.disableEmptyOrderForm();
    if(this.cartItems.length == 0) this.orderForm.reset('');

  }
  totalValue():number {
    this.total = 0.0;
    this.cartItems.forEach(item => { this.total += (item.quantity * item.price)})
    return this.total;
  }
}
