import {Routes} from "@angular/router";
import {AutoComponent} from "./auto/auto.component";
import {HomeComponent} from "./home/home.component";
import {SALES_AUTO_ROUTES} from "./auto/auto.routes";

export const SALES_ROUTES: Routes = [

  {path: 'auto', component: AutoComponent},
  {path: 'auto', component: AutoComponent, children: SALES_AUTO_ROUTES},
  {path: 'home', component: HomeComponent}

];
