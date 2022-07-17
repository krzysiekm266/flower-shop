import { Injectable } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';
import { FLOWERS, Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Observable<Product[]>;
  constructor() {
    this.products = of(FLOWERS);
  }
  getAllProducts():Observable<Product[]> {
    return this.products;
  }
  getProductsByCategory(category:string):Observable<Product[]> {
    return this.products.pipe(
      map(products => { return products.filter( item => item.category == category  ) }),
    );
  }
  getProductById(id:number):Observable<Product> {
    return this.products.pipe(
      map(products => { return products.find( item => item.id == id  ) }),
    ) as Observable<Product>;
  }
}
