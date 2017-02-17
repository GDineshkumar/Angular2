import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routing";
import {AppComponent} from "./app.component";
import {SalesComponent} from "./sales/sales.component";
import {AutoComponent} from "./sales/auto/auto.component";
import {HomeComponent} from "./sales/home/home.component";
import {
  NameComponent,
  PersonalDetailsComponent,
  AddressComponent
} from "./sales/auto/personal-details/personal-details.component";
import {SelectPremiumComponent} from "./sales/auto/select-premium/select-premium.component";
import {VehicleComponent} from "./sales/auto/vehicle/vehicle.component";

// Make sure all Components used are imported into this Module

@NgModule({
  declarations: [
    AutoComponent,
    SelectPremiumComponent,
    PersonalDetailsComponent,
    VehicleComponent,
    NameComponent,
    AddressComponent,
    SalesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
