/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyMainComponent } from './my-main/my-main.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MySearchComponent } from './my-search/my-search.component';
import { MyLocationComponent } from './my-location/my-location.component';
import { MyCategoryComponent } from './my-category/my-category.component';
import { MyListingComponent } from './my-listing/my-listing.component';
import { MyMainListingComponent } from './my-listing/my-main-listing/my-main-listing.component';
import {routing} from "./app.routing";
import {CategoryService} from "./services/category.service";
import {LocationService} from "./services/location.service";
// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';

/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */
  declarations: [ AppComponent, MyHeaderComponent, MyMainComponent, MyHomeComponent, MyFooterComponent, MySearchComponent, MyLocationComponent, MyCategoryComponent, MyListingComponent, MyMainListingComponent ],
  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * NodeModule, NodeHttpModule, NodeJsonpModule are included
     */
    UniversalModule,
    FormsModule,
    routing
    /**
     * using routes
     */
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [CategoryService,LocationService]
})
export class AppModule {

}