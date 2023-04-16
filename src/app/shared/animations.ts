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


export const inOutAnimation = trigger('inOutAnimation', [
    transition(
      ':enter', 
      [
        style({ height: 0, opacity: 0 }),
        animate('.3s ease-out', style({ height: "*", opacity: 1 }))
      ]
    ),
    transition(
      ':leave', 
      [
        style({ height: "*", opacity: 1 }),
        animate('.3s ease-in', style({ height: 0, opacity: 0 }))
      ]
    )
  ]
)