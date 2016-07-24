import { provideRouter, RouterConfig }  from '@angular/router';

import * as Components  from './pages/Components';
const routes: RouterConfig = [
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

export const appRouterProviders = [
  provideRouter(routes)
];
