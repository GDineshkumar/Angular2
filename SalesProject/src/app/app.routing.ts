import {Routes} from "@angular/router";
import {SalesComponent} from "app/sales/sales.component";
import {SALES_ROUTES} from "./sales/sales.routes";
import {LandingComponent} from "./landing/landing.component";

export const APP_ROUTES: Routes = [

  {path: '', component: LandingComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'sales', component: SalesComponent, children: SALES_ROUTES}


];
