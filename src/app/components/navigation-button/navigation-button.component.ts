import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.css']
})
export class NavigationButtonComponent implements OnInit {
  @Input() text:string = ''
  @Input() bgImage:string = '';

  @Output() sendButtonText = new EventEmitter<string>();
  constructor(private _configService:ConfigService) { }

  ngOnInit(): void {
    this._configService.getCategoryBg(this.text).subscribe(background => this.bgImage = background.categoryBackground);
    // console.log(this.bgImage);
  }
  clickLink() {
     this.sendButtonText.emit(this.text);

  }

}
