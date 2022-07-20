import { Component, OnInit } from '@angular/core';
import { faFacebookF,faTwitter,faTwitch, } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
  //fort awsome icons
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faTwitch = faTwitch;
  //properties
  constructor() { }

  ngOnInit(): void {
  }

}
