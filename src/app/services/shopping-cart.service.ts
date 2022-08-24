import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private _order$: Observable<Product[]> | null;
  constructor() {
    this._order$ = new Observable<Product[]>();
  }

  addItem(product: Product): Observable<Product[]> {
    if (this._order$ == null) {
      this._order$ = new Observable<Product[]>();
    }

    return this._order$.pipe(
      tap((order) => {
        order.push(product);
      })
    );
  }
  deleteItem(product: Product) {
    this._order$?.pipe(
      map((order) => {
        return order.filter((item) => item.id !== product.id);
      })
    );
  }
  confirmOrder() {
    this._order$ = null;
  }
  getOrderList(): Observable<Product[]> | null {
    return this._order$;
  }
}
