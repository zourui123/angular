import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';


// trigger 后的名字 就是动画的名字
 export const flyIn = trigger('flyIn', [
    state('inactive', style({
      backgroundColor: '#eee',
      transform: 'scale(1)'
    })),
    state('active',   style({
      backgroundColor: '#cfd8dc',
      transform: 'scale(1.1)'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
  ])
