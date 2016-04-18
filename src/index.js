// Polyfills
import 'core-js';
import 'zone.js/dist/zone';

// RxJS
import 'rxjs';

// Bootstrap
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {HashLocationStrategy, LocationStrategy} from 'angular2/router';

import {App} from './app';

bootstrap(App, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/'}),
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
