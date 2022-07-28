import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() bgImagePath: string = '';
  @Output() clickCloseIcon = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  clickClose() {
    return this.clickCloseIcon.emit();
  }
  onButtonTextSend(text: string) {
    this.buttonText = text;
  }
  onBgImagePathSend(bgImgPath: string) {
    this.bgImagePath = bgImgPath;
  }
}
