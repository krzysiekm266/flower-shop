import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
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
  constructor() {}

  ngOnInit(): void {}
  onHamburgerClick() {
    return this.hamburgerClick.emit();
  }

}
