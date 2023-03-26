import { trigger, animate, transition, style } from '@angular/animations';

export const fadeInOutAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ opacity: 0 }),
      animate('0.5s', style({ opacity: 1 }))
    ])
  ]);

export let fade = trigger('fade', [
  transition(':enter', [
      style({ opacity: 0 }),
      animate(1000)
  ])
])

export const fadeAnimation = trigger('fade', [
  transition('visible <=> hidden', [
    style({ opacity: 0, display: 'none' }),
    animate('300ms', style({ opacity: 1, display: 'block' }))
  ])
])