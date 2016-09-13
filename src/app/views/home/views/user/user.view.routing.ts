import { RouterModule } from '@angular/router';

import { UserView } from './user.view';

export const routing = RouterModule.forChild([
  { path: '', component: UserView }
]);
