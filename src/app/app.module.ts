import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { routing } from './app.routing';

import { LogService } from 'services/log';

import { ComponentsModule } from './components';

@NgModule({
  bootstrap: [ App ],
  declarations: [ App ],
  imports: [
    BrowserModule,
    routing,

    ComponentsModule
  ],
  providers: [ LogService ]
})

export class AppModule { }
