import {Routes} from "@angular/router";
import {SalesComponent} from "app/sales/sales.component";
import {SALES_ROUTES} from "./sales/sales.routes";

export const APP_ROUTES: Routes = [

  {path: 'sales', component: SalesComponent},
  {path: 'sales', component: SalesComponent, children: SALES_ROUTES}


];
