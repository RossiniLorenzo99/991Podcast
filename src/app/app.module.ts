import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Approutes } from './app.routes';
import { ListapComponent } from './listap/listap.component';
import { RiproducipComponent } from './riproducip/riproducip.component';

@NgModule({
  declarations: [
    AppComponent,
    ListapComponent,
    RiproducipComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(Approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
