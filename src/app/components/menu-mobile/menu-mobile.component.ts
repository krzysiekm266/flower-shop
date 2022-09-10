import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css'],
})
export class MenuMobileComponent implements OnInit {
  /**
   *  buttonText is used as route parameter (category name for products list)
   */
  @Input() buttonText: string = '';
  @Output() clickCloseIcon = new EventEmitter();
  constructor( ) {
  }

  ngOnInit(): void {}

  clickClose() {
    this.clickCloseIcon.emit();
  }
  onButtonTextSend(text: string) {
    this.buttonText = text;
  }

}
