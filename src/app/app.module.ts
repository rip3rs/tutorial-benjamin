import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloorModule } from './floor-module/floor-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FloorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
