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

  getSubCategoris(category){
    let subCategories = {
      'category1' : ['a1','b1'],
      'catrgory2' : ['a2','b2'],
      'catrgory3' : ['a3','b3'],
      'catrgory4' : ['a4','b4'],
      'catrgory5' : ['a5','b5']
    }
  }

}
