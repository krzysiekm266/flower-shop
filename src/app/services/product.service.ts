import { Injectable } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';
import { CATEGORIES, Category } from '../models/Category';
import { FLOWERS, Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products$:Observable<Product[]>;
  // categories:Category[];
  constructor() {
    this._products$ = of(FLOWERS);
    // this.categories = CATEGORIES;
  }
  getAllProducts():Observable<Product[]> {
    return this._products$;
  }
  getProductsByCategory(category:string):Observable<Product[]> {
    return this._products$.pipe(
      map(products => { return products.filter( item => item.category == category  ) }),
    );
  }
  getProductById(id:number):Observable<Product> {
    return this._products$.pipe(
      map(products => { return products.find( item => item.id == id  ) }),
    ) as Observable<Product>;
  }
  // getCategoryDescription(name:string):string {
  //   return this.categories.find(category => category.name == name)
  //   ? this.categories.find(category => category.name == name)?.description as string
  //   :'There is no decriptin for '+ name +'category.';
  // }
}
