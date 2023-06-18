import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from 'src/app/shared/animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [routeAnimations],
})
export class AuthComponent {
  prepareRouteTransition(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
