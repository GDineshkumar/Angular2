
import { PersonalInfoComponent } from './personalInfo.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [PersonalInfoComponent],
  exports :[PersonalInfoComponent],
})

export class PersonalInfoModule{}
