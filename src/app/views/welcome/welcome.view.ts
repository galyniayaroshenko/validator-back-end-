import { Component } from '@angular/core';

import { LogService } from 'services/log';

@Component({
  styles: [require('./welcome.view.scss')],
  template: require('./welcome.view.html')
})

export class WelcomeView {
  constructor(logService: LogService) {
    logService.log('Welcome view');
  }
}
