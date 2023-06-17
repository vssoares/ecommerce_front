import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { HomeService } from 'src/app/ecommerce/pages/home/home.service';

interface Hero {
  nome: string;
}

@Injectable()
export class HomeResolve implements Resolve<any> {
  constructor(private homeService: HomeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return forkJoin([]);
  }
}
