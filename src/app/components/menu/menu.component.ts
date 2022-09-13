import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCartShopping,faFan,faCircleQuestion,faHouse } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  //fort awsome icons
  faCartShopping = faCartShopping;
  faFan = faFan;
  faCircleQuestion = faCircleQuestion;
  faHouse = faHouse;
  //properties
  @Output() hamburgerClick = new EventEmitter();
  cartCounter:number = 0;
  constructor(private _shoppingCartService:ShoppingCartService) {}

  ngOnInit(): void {
    this.cartCounter = this._shoppingCartService.getCounter();
  }
  onHamburgerClick() {
    this.hamburgerClick.emit();
  }
  cartCount():number {
    this.cartCounter = this._shoppingCartService.getCounter();
    return this._shoppingCartService.getCounter();
  }
}
