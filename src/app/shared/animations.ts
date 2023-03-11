import { trigger, animate, transition, style } from '@angular/animations';

export const fadeInOutAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ opacity: 0 }),
      animate('0.5s', style({ opacity: 1 }))
    ])
  ]);