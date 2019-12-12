import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmallSizeModule } from './feature/small/small-size.module';
import { BigSizeModule } from './feature/big/big-size.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SmallSizeModule,
    BigSizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
