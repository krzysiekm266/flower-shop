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
  deleteItem(index:number):Observable<Product[]> {
    return this._order$.pipe(
      tap((order) => {
        return order.splice(index,1);
      })
    );

  }
  confirmOrder():Observable<Product[]> {
    return this._order$.pipe(
      tap((order) => {
        return order.splice(0,order.length);
      })
    );

  }
  getOrderList(): Observable<Product[]>  {
    return this._order$;
  }
  getCounter():number {
    let counter = 0;
    this._order$.subscribe(order => counter = order.length);
    return counter;
  }
}
