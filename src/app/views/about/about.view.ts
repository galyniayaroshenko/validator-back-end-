import { Component } from '@angular/core';

import { LogService } from 'services/log';

@Component({
  styles: [require('./about.view.scss')],
  template: require('./about.view.html')
})

export class AboutView {
  constructor(logService: LogService) {
    logService.log('About view');
  }
}
