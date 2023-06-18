import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from '../shared/animations';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
  animations: [routeAnimations],
})
export class EcommerceComponent {
  prepareRouteTransition(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
