import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent }   from './home.component';
import {MnFullpageDirective} from "../fullpagetest/mnFullpage.directive";

@NgModule({
  imports: [
    HomeRoutingModule
  ],
  exports: [],
  declarations: [HomeComponent, MnFullpageDirective],
  providers: [],
})
export class HomeModule { }
