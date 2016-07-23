"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./pages/home/home.component');
var about_component_1 = require('./pages/about/about.component');
var routes = [
    {
        path: '',
        redirectTo: '/',
        terminal: true
    },
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map