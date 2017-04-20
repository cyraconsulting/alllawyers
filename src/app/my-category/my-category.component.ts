import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-category',
  templateUrl: './my-category.component.html',
  styleUrls: ['./my-category.component.css']
})
export class MyCategoryComponent implements OnInit {

  @Input() title : string;
  subCategories: any[];

  constructor() { }

  ngOnInit() {
    this.subCategories = ['Sub category1', 'Sub category2', 'Sub category3','Sub category4'];
  }

}
