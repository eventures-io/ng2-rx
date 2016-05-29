/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home/home';
import {JSONP_PROVIDERS, Jsonp} from "angular2/http";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [JSONP_PROVIDERS],
  directives: [ ],
  styles: [`
    width ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    width li {
      display: inline;
    }
    width li.active {
      background-color: lightgray;
    }
  `],
  template: `
    <header>
      <nav class="row">
        <ul class="menu">
          <li router-active>
            <a [routerLink]=" ['Index'] ">Home</a>
          </li>
          <!--<li router-active>-->
            <!--<a [routerLink]=" ['Home'] ">Home</a>-->
          <!--</li>-->
          <li router-active>
            <a [routerLink]=" ['About'] ">About</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
 // { path: '/home',  name: 'Home',  component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about/about')('About') },
])
export class App {

  constructor() {
  }
}


