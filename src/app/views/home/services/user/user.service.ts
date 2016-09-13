import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  log(msg: string) {
    console.log('WelcomeView: ' + msg);
  }
}
