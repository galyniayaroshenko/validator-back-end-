import { NgModule } from '@angular/core';

import { HomeView } from './home.view';
import { routing } from './home.view.routing';

import { UserService } from 'services/user';

// import { ComponentsModule } from './components';

@NgModule({
  declarations: [
    HomeView
  ],
  imports: [
    routing,
    // ComponentsModule
  ],
  providers: [ UserService ]
})

export class HomeViewModule { }
