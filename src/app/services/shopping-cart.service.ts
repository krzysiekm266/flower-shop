import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private _order:Observable<Product[]>;
  constructor() {
   this._order = new Observable<Product[]>();
   }
}
