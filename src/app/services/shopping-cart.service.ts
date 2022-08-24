import { Injectable } from '@angular/core';
import {  Observable,of } from 'rxjs';
import { tap,map } from "rxjs/operators";
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private _order$: Observable<Product[]> ;
  constructor() {
    this._order$ = of([]);
  }

  addItem(product: Product): Observable<Product[]> {
  return this._order$.pipe(
    tap(order => order.push(product)),
  );
  // return this._order$;

  }
  deleteItem(product: Product) {
    this._order$.pipe(
      map((order) => {
        return order.filter((item) => item.id !== product.id);
      })
    );
  }
  confirmOrder() {
    // this._order$ = null;
  }
  getOrderList(): Observable<Product[]>  {
    return this._order$;
  }
}
