import {Routes} from "@angular/router";
import {AddressComponent, NameComponent} from "./personal-details.component";

export const PERSONAL_DETAILS_ROUTES: Routes = [

  {path: 'name', component: NameComponent, outlet: 'personal-detail-outlet'},
  {path: 'address', component: AddressComponent, outlet: 'personal-detail-outlet'}

];
