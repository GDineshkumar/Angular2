import {Routes} from '@angular/router';
import {SalesComponent} from 'app/sales/sales.component';
import {AutoModule} from 'app/sales/auto/auto.module';
import {AutoComponent} from 'app/sales/auto/auto.component';
import {HomeComponent} from 'app/sales/home/home.component';
import {PersonalDetailsComponent} from "./sales/auto/personal-details/personal-details.component";
import {SelectPremiumComponent} from "./sales/auto/select-premium/select-premium.component";

export const routes: Routes = [

  {

    path: 'sales',
    component: SalesComponent,
    children: [
      {path: 'auto', component: AutoComponent},
      {path: 'home', component: HomeComponent}
    ]

  }


];
