import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { EMPTY, Observable, catchError, delay } from 'rxjs';
import { DadosBasicosService } from './dados-basicos.service';
import { LoaderService } from 'src/app/shared/components/loader/loader-service.service';

@Injectable({
  providedIn: 'root',
})
export class DadosBasicosResolve implements Resolve<any> {
  constructor(
    private users: DadosBasicosService,
    private router: Router,
    private loaderService: LoaderService
  ) {}
  resolve(): Observable<any> {
    this.loaderService.show();
    return this.users.getUsers().pipe(
      delay(1000),
      catchError(() => {
        this.router.navigate(['']);
        return EMPTY;
      })
    );
  }
}
