import {  
  Component,
  Input,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';

import { UserService } from './services/user';

@Component({
  styles: [require('./home.view.scss')],
  template: require('./home.view.html')
})

export class HomeView {
  constructor(logService: UserService) {
    logService.log('User view');
  }
}
