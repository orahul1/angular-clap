import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngClapModule } from 'projects/ang-clap/src/public-api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngClapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
