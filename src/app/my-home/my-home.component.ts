import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../services/category.service";
import {LocationService} from "../services/location.service";

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  categories:any[];
  locations: any[];

  constructor(private categoryService:CategoryService,private locationService:LocationService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.locations = this.locationService.getLocations();
  }

}
