import { Component } from '@angular/core';
import {NavigationComponent} from "./navigation"
import { ROUTER_DIRECTIVES } from '@angular/router'
@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [NavigationComponent,ROUTER_DIRECTIVES],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
