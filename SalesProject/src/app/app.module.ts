import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {routes} from './app.routes';

import {AppComponent} from './app.component';
import {SalesComponent} from './sales/sales.component';
import {AutoComponent} from './sales/auto/auto.component';
import {HomeComponent} from './sales/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    HomeComponent,
    AutoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
