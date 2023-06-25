import { AuthService } from 'src/app/ecommerce/pages/auth/auth.service';
import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { EMPTY, Observable, catchError, delay, of } from 'rxjs';
import { DadosBasicosService } from './dados-basicos.service';
import { LoaderService } from 'src/app/shared/components/loader/loader-service.service';

@Injectable({
  providedIn: 'root',
})
export class DadosBasicosResolve implements Resolve<any> {
  constructor(
    private users: DadosBasicosService,
    private router: Router,
    private loaderService: LoaderService,
    private authService: AuthService,
    private dadosBasicosService: DadosBasicosService
  ) {}
  resolve(): Observable<any> {
    this.loaderService.show();
    const usuario = this.authService.getUsuario();
    const cache = this.dadosBasicosService.dadosBasicosCache;

    if (cache) {
      return cache.dados;
    }

    return this.users.getDadosBasicos(usuario.user?.id).pipe(
      delay(300),
      catchError(() => {
        this.loaderService.hide();
        return EMPTY;
      })
    );
  }
}
