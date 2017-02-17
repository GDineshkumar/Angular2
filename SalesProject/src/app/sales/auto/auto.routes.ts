import {Routes} from "@angular/router";
import {PersonalDetailsComponent} from "./personal-details/personal-details.component";
import {SelectPremiumComponent} from "./select-premium/select-premium.component";
import {VehicleComponent} from "./vehicle/vehicle.component";
import {PERSONAL_DETAILS_ROUTES} from "./personal-details/personal-details.routes";

export const SALES_AUTO_ROUTES: Routes = [

    {path: 'select-premium', component: SelectPremiumComponent},
    {path: 'personal-details', component: PersonalDetailsComponent},
    {path: 'personal-details', component: PersonalDetailsComponent, children: PERSONAL_DETAILS_ROUTES},
    {path: 'vehicle', component: VehicleComponent}

  ];
