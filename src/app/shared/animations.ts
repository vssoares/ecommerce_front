import { trigger, animate, transition, style } from '@angular/animations';

export const fadeInOutAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('0.5s', style({ opacity: 1 })),
  ]),
]);

export let fade = trigger('fade', [
  transition(':enter', [style({ opacity: 0 }), animate(1000)]),
]);

export const toggleCarrinho = trigger('toggleCarrinho', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('.3s ease-out', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0)' }),
    animate('.3s ease-in', style({ transform: 'translateX(100%)' })),
  ]),
]);

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('.3s ease-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('.3s ease-in', style({ opacity: 0 })),
  ]),
]);

export const inOutAnimation = trigger('inOutAnimation', [
  transition(':enter', [
    style({ height: 0, opacity: 0 }),
    animate('.3s ease-out', style({ height: '*', opacity: 1 })),
  ]),
  transition(':leave', [
    style({ height: '*', opacity: 1 }),
    animate('.3s ease-in', style({ height: 0, opacity: 0 })),
  ]),
]);
