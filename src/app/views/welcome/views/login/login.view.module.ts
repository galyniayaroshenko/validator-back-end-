import { NgModule } from '@angular/core';

import { LoginView } from './login.view';
import { routing } from './login.view.routing';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    LoginView
  ]
})

export class LoginViewModule { }
