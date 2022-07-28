import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  /**
   *  buttonText is used as route parameter (category name for products list)
   */
  @Input() buttonText:string ='';
  @Input() bgImagePath:string = '';
  constructor() { }

  ngOnInit(): void {

  }
  onButtonTextSend(text:string) {
    this.buttonText = text;
  }
  onBgImagePathSend(bgImgPath:string) {
    this.bgImagePath = bgImgPath;
  }
}
