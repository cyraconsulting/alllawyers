import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories() {
    let categories = [
      'Category Title1',
      'Category Title2',
      'Category Title3',
      'Category Title4',
      'Category Title5',
      'Category Title6',
      'Category Title7',
      'Category Title8',
      'Category Title9'
    ];
    return categories;
  }

}
