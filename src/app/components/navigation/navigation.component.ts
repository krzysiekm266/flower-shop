import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() buttonText:string ='';
  constructor() { }

  ngOnInit(): void {

  }
  onNavLinkClicked(text:string) {
    this.buttonText = text;
  }
}
