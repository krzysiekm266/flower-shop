import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.css']
})
export class NavigationButtonComponent implements OnInit {
  @Input() text:string = ''
  @Input() bgImage:string = '';
  @Input() width:string = '100%';
  @Input() height:string = '100%';
  imgPath:string = 'assets/images/nav/';
  constructor() { }

  ngOnInit(): void {
    // this.bgImage  = this.imgPath + this.bgImage;
    let img = this.imgPath + this.bgImage;
    this.bgImage  = 'url('+ img+')';
    console.log(this.bgImage);

  }

}
