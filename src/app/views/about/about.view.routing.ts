import { RouterModule } from '@angular/router';

import { AboutView } from './about.view';

export const routing = RouterModule.forChild([
  { path: '', component: AboutView }
]);
