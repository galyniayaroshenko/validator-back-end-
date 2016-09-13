import { RouterModule } from '@angular/router';

import { WelcomeView } from './welcome.view';

import { StubComponent } from 'components/stub';

export const routing = RouterModule.forChild([
  {
    path: '',
    component: WelcomeView,
    children: [
      { path: '', component: StubComponent },
      { path: 'login', loadChildren: () => require('./views/login').LoginViewModule }
    ]
  }
]);
