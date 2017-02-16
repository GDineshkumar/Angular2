import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';
import { AutoModule } from './auto/auto.module';
import { SalesComponent } from './sales.component';
import { HomeComponent } from './home/home.component';
import { AutoComponent } from './auto/auto.component';


@NgModule({
  imports: [AppModule, RouterModule, AutoModule],
  declarations: [SalesComponent, HomeComponent, AutoComponent],
  exports: [SalesComponent],
})

export class SalesModule {
}
