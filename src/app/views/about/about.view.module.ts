import { NgModule } from '@angular/core';

import { AboutView } from './about.view';
import { routing } from './about.view.routing';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    AboutView
  ]
})

export class AboutViewModule { }
