import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Navcomponent } from './nav/nav.component';
import { Headercomponent } from './header/header.component';
import { Footercomponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Headercomponent,
    Navcomponent,
    Footercomponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
