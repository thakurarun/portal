import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/',
    terminal: true
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

export const appRouterProviders = [
  provideRouter(routes)
];
