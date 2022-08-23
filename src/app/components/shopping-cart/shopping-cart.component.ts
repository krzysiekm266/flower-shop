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
  constructor(private _fb: FormBuilder,private _shoppingCartService:ShoppingCartService) {}

  ngOnInit(): void {
    this._shoppingCartService.getOrderList()?.subscribe(items => this.cartItems = items);

    this.orderForm = this._fb.group({
      firstName: ['',Validators.required],
      lastName: [''],
      address: this._fb.group({
        city: [''],
      }),
    });
  }
  onSubmit() {
    window.alert('Thank you for buying in our shop!');
  }
}
