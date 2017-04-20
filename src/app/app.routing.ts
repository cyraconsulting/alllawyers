import {Routes, RouterModule} from "@angular/router";
import {MyListingComponent} from "./my-listing/my-listing.component";
import {MyMainComponent} from "./my-main/my-main.component";
import {ModuleWithProviders} from "@angular/core";



const APP_ROUTES : Routes = [
  {path:'listing',component:MyListingComponent},
  {path:'',component:MyMainComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);

