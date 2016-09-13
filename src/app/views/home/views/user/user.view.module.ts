import { NgModule } from '@angular/core';

import { UserView } from './user.view';
import { routing } from './user.view.routing';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    UserView
  ]
})

export class UserViewModule { }
