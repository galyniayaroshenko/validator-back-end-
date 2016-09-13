import { RouterModule } from '@angular/router';

import { LoginView } from './login.view';

export const routing = RouterModule.forChild([
  { path: '', component: LoginView }
]);
