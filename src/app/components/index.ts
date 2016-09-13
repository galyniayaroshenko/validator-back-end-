import { NgModule } from '@angular/core';

import { StubComponent } from './stub';

@NgModule({
  declarations: [
    StubComponent,
  ],
  exports: [
    StubComponent,
  ]
})

export class ComponentsModule { }
