import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Background, BACKGROUNDS } from '../models/Background';
import { Category,CATEGORIES } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _categories$:Observable<Category[]>;
  private _backgrounds$:Observable<Background[]>;
  constructor() {
    this._categories$ = of(CATEGORIES);
    this._backgrounds$ = of(BACKGROUNDS);
  }
  getCategoryDescription(name:string):Observable<Category> {
   return this._categories$.pipe(
    map(categories => { return categories.find(category => category.name == name ) }),
   ) as Observable<Category>;
  }

  getCategoryBg(name:string):Observable<Background> {
    return this._backgrounds$.pipe(
      map( backgrounds => { return backgrounds.find(background => background.categoryName == name ) }),
    ) as Observable<Background>;
  }
}
