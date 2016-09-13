import { RouterModule } from '@angular/router';

import { HomeView } from './home.view';

// import { StubComponent } from 'components/stub';

export const routing = RouterModule.forChild([
  { path: '', component: HomeView },
  { path: 'user', loadChildren: () => require('./views/user').UserViewModule },
  { path: 'project', loadChildren: () => require('./views/project').ProjectViewModule }
]);

// export const routing = RouterModule.forChild([
//   { 
//     path: '', 
//     component: HomeView
//     // children: [
//     //   { path: '', component: StubComponent },
//     //   { path: 'login', loadChildren: () => require('./views/user').UserViewModule }
//     // ]
//   },
//   { path: 'user', loadChildren: () => require('./views/user').UserViewModule }
// ]);

