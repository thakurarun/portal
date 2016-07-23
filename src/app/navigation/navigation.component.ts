import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-navigation',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title: string = "Arun Thakur";
  constructor() {

  }

  ngOnInit() {
  }

}
