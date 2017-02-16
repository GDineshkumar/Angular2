import {AutoComponent} from './auto.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SelectPremiumComponent} from './select-premium/select-premium.component';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';
import {routes} from './auto.routes';

@NgModule({
  imports: [
    AutoComponent,
    SelectPremiumComponent,
    PersonalDetailsComponent,
    RouterModule.forChild(routes)
  ],
  declarations: [AutoComponent, SelectPremiumComponent, PersonalDetailsComponent],
  exports: [AutoComponent]
})

export class AutoModule {
}
