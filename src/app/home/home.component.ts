import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MnFullpageDirective} from "../fullpagetest/mnFullpage.directive";

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(MnFullpageDirective) vc:MnFullpageDirective;

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit home")
  }

  ngAfterViewInit(): void {
    // this.vc.callme();

  }
}