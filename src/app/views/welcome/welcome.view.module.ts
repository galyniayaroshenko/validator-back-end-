import { NgModule } from '@angular/core';

import { WelcomeView } from './welcome.view';
import { routing } from './welcome.view.routing';

import { LogService } from 'services/log';

import { ComponentsModule } from './components';

@NgModule({
  declarations: [
    WelcomeView
  ],
  imports: [
    routing,
    ComponentsModule
  ],
  providers: [ LogService ]
})

export class WelcomeViewModule { }
