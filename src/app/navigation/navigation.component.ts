import { Component, OnInit, ViewChild , trigger, state, style, transition, animate } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
declare var jQuery:any;
@Component({
  moduleId: module.id,
  selector: 'app-navigation',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title: string = "Arun Thakur";
  navs : string[] = [];
  constructor() {

  }

  ngOnInit() {
  }

}
