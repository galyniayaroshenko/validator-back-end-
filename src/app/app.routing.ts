import { RouterModule } from '@angular/router';

export const routing = RouterModule.forRoot([
  { path: '', redirectTo: 'wp', pathMatch: 'full' },

  { path: 'wp', loadChildren: () => require('./views/welcome').WelcomeViewModule },
  { path: 'about', loadChildren: () => require('./views/about').AboutViewModule },
  { path: 'home', loadChildren: () => require('./views/home').HomeViewModule }
]);
