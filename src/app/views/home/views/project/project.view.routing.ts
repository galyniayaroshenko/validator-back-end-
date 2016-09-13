import { RouterModule } from '@angular/router';

import { ProjectView } from './project.view';

export const routing = RouterModule.forChild([
  { path: '', component: ProjectView }
]);