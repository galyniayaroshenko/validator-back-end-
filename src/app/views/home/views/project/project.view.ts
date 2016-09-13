import { 
  Component,
  trigger,
  state,
  animate,
  transition,
  style
} from '@angular/core';

@Component({
  // template: require('./project.view.html'),
  styles: [require('./project.view.scss')],
  template: `
  <div class="page">Another page</div>
  <router-outlet></router-outlet>`,
   host: {
     '[@routeAnimation]': 'true',
     '[style.position]': "'absolute'",
     '[style.background]': "'red'"
   },
  animations: [
    trigger('routeAnimation', [
      // state('*', style({transform: 'translateX(0)', opacity: 1, background: '#333'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate(1000)
      ]),
      transition('* => void', animate(1000, style({transform: 'translateX(100%)', opacity: 0})))
    ])
  ]
})

export class ProjectView {
  constructor() {}
}
