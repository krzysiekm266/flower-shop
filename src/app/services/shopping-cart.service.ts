import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private _order:Observable<Product[]> | null ;
  constructor() {
   this._order = new Observable<Product[]>();
   }

  addItem(product:Product):Observable<Product[]> {
    if(this._order == null) {
      this._order = new Observable<Product[]>();
    }
    //for test only
    let tmp:Product[] = [];
    tmp.push(product);
    this._order = of(tmp);
    return this._order;
  }
  deleteItem(product:Product) {
    this._order?.pipe(
      map(order => { return order.filter(item => item.id !== product.id ) }),
    );
  }
  confirmOrder() {
    this._order = null;
  }
  getOrderList():Observable<Product[]> | null{
    return this._order;
  }
}
