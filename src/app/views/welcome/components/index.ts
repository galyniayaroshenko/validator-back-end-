import { NgModule } from '@angular/core';

import { ComponentsModule as ParentComponentsModule } from '../../../components';
import { LocalComponentsModule } from './local-components.module';

@NgModule({
  imports: [
    ParentComponentsModule
  ],
  exports: [
    LocalComponentsModule,
    ParentComponentsModule
  ]
})

export class ComponentsModule { }
