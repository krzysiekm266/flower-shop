import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  orderForm!: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.orderForm = this._fb.group({
      firstName: ['',Validators.required],
      lastName: [''],
      address: this._fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });
  }
  onSubmit() {
    window.alert('Thank you for buying in our shop!');
  }
}
