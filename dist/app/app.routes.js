"use strict";
var router_1 = require('@angular/router');
var Components = require('./pages/Components');
var routes = [
    {
        path: '',
        redirectTo: '/',
        terminal: true
    },
    {
        path: '',
        component: Components.HomeComponent
    },
    {
        path: 'about',
        component: Components.AboutComponent
    },
    {
        path: 'cv',
        component: Components.CvComponent
    },
    {
        path: 'contact',
        component: Components.ContactComponent
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map