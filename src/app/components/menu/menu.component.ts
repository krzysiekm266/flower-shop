import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  //fort awsome icons
  faCartShopping = faCartShopping;
  //properties
  @Output() hamburgerClick = new EventEmitter();
  cartCounter:number = 0;
  constructor(private _shoppingCartService:ShoppingCartService) {}

  ngOnInit(): void {
    this.cartCounter = this._shoppingCartService.getCounter();
  }
  onHamburgerClick() {
    return this.hamburgerClick.emit();
  }
  cartCount() {
    this.cartCounter = this._shoppingCartService.getCounter();
    return this._shoppingCartService.getCounter();
  }
}
