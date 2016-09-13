import { 
  Component,
  trigger,
  state,
  animate,
  transition,
  style
} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  styles: [require('./login.view.scss')],
  template: require('./login.view.html'),
  host: {
     '[@routeAnimation]': 'true'
   },
  // animations: [
  //   trigger('routeAnimation', [
  //     state('*', style({opacity: 1})),
  //     transition('void => *', [
  //       style({opacity: 0}),
  //       animate(1200)
  //     ]),
  //     transition('* => void', animate(1200, style({opacity: 0})))
  //   ])
  // ]

  //  animations: [
  //   trigger('routeAnimation', [
  //     state('*', style({ transform: 'rotate(0deg)', opacity: 1})),
  //     transition('void => *', [
  //       style({ transform: 'rotate(360deg)', opacity: 0}),
  //       animate(1200)
  //     ]),
  //     transition('* => void', animate(600, style({transform: 'rotate(360deg)', opacity: 0})))
  //   ])
  // ]

  //  host: {
  //    '[@routeAnimation]': 'true'
  //  },

  animations: [
    trigger('routeAnimation', [
      state('*', style({ transform: 'rotate(0deg)', opacity: 1})),
      transition('void => *', [
        style({ transform: 'rotate(360deg)', opacity: 0}),
        animate(1200)
      ]),
      transition('* => void', animate(600, style({transform: 'rotate(360deg)', opacity: 0})))
    ])
  ]

// animations: [
//     trigger('routeAnimation', [
//       state('*', style({ transform: 'translateX(0)', opacity: 1})),
//       transition('void => *', [
//         style({ transform: 'translateX(-100%)', opacity: 0}),
//         animate(1200)
//       ]),
//       transition('* => void', animate(1200, style({transform: 'translateX(-100%)', opacity: 0})))
//     ])
//   ]
})

export class LoginView {
  routeAnimation: String;
  constructor(private router: Router) {}

  close() {
    this.router.navigate(['wp']);
    this.routeAnimation = 'collapsed';
  }

  login() {
    this.router.navigate(['/home']);
  }
}
