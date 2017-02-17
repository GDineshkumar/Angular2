import {Routes} from "@angular/router";
import {AddressComponent, NameComponent} from "./personal-details.component";

export const PERSONAL_DETAILS_ROUTES: Routes = [

  {path: 'name', component: NameComponent},
  {path: 'address', component: AddressComponent}

];
