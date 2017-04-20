import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  @Input() pageName : string;
  imageName : string;

  constructor() { }

  ngOnInit() {
    if(this.pageName === 'main'){
      this.imageName = "assets/img/logo-white.png";
    } else {
      this.imageName = "assets/img/logo.png";
    }
  }

}
