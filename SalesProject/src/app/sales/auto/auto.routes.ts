import {Routes} from '@angular/router';
import {PersonalDetailsComponent} from "./personal-details/personal-details.component";
import {SelectPremiumComponent} from "./select-premium/select-premium.component";

export const routes: Routes = [

  {path: 'personal-details', component: PersonalDetailsComponent},
  {path: 'select-premium', component: SelectPremiumComponent}

];
