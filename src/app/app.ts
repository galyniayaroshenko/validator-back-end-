import { Component } from '@angular/core';

import { LogService } from 'services/log';

@Component({
  selector: 'cm-app',
  styles: [require('./app.scss')],
  template: require('./app.html')
})

export class App {
  constructor(logService: LogService) {
    logService.log('App started');
  }
}
