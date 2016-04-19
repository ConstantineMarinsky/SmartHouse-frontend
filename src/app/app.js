import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {Home} from './home';
import {Dashboard} from './dashboard';
import {SensorDetail} from './sensor-detail';

import exampleRest from './example.rest.js';

@Component({
    selector: 'sh-app',
    directives: [RouterLink, RouterOutlet, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    styles: [require('./app.css')],
    template: `
      <h1>Smart House</h1>
      <nav>
        <a [routerLink]="['Home']">Home</a>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['SensorDetail', {id: 'test'}]">SensorDetail</a>
      </nav>
      <main>
        <router-outlet></router-outlet>
      </main>`
})
@RouteConfig([
    {path: '/', name: 'Index', component: Home, useAsDefault: true},
    {path: '/home', name: 'Home', component: Home},
    {path: '/dashboard', name: 'Dashboard', component: Dashboard},
    {path: '/sensor/:id', name: 'SensorDetail', component: SensorDetail}
])

export class App {
    ngOnInit() {
        console.log('Init App'); // eslint-disable-line
        exampleRest();
    }
}
