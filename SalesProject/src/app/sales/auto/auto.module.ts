import {AutoComponent} from "./auto.component";
import {NgModule} from "@angular/core";
import {SelectPremiumComponent} from "./select-premium/select-premium.component";
import {PersonalDetailsComponent, NameComponent, AddressComponent} from "./personal-details/personal-details.component";
import {VehicleComponent} from "./vehicle/vehicle.component";


@NgModule({
  imports: [
    AutoComponent,
    SelectPremiumComponent,
    PersonalDetailsComponent,
    VehicleComponent,
    SelectPremiumComponent,
    NameComponent,
    AddressComponent
  ],
  declarations: [
    AutoComponent,
    SelectPremiumComponent,
    VehicleComponent,
    PersonalDetailsComponent,
    NameComponent,
    AddressComponent
  ],
  exports: [AutoComponent]
})

export class AutoModule {
}
