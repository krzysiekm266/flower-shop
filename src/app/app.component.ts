import { Component, Input } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flower-shop';
  @Input() showMenuMobile:boolean = false;
  constructor() {  }
  showMobileMenu() {
    this.showMenuMobile = true;
  }
  hideMobileMenu() {
    this.showMenuMobile = false;
  }
}
