import { NgModule } from '@angular/core';
import { AngClapComponent } from './ang-clap.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AngClapComponent],
  imports: [
    CommonModule
  ],
  exports: [AngClapComponent]
})
export class AngClapModule { }
