import { NgModule } from '@angular/core';

import { ProjectView } from './project.view';
import { routing } from './project.view.routing';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    ProjectView
  ]
})

export class ProjectViewModule { }