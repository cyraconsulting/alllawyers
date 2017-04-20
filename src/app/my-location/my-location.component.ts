import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-location',
  templateUrl: './my-location.component.html',
  styleUrls: ['./my-location.component.css']
})
export class MyLocationComponent implements OnInit {

  @Input() location:string;
  cities:any[];

  constructor() { }

  ngOnInit() {
    this.cities = [
      'Toronto',
      'Richmond Hill',
      'North York',
      'Tornhill'
    ]
  }

}
