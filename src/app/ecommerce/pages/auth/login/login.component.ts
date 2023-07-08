import { Component, OnDestroy, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeAnimation } from 'src/app/shared/animations';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { CarrinhoService } from 'src/app/shared/components/carrinho/carrinho.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeAnimation],
})
export class LoginComponent implements OnDestroy {
  formulario: FormGroup;
  msgErro: any;
  subs: Subscription[] = [];

  authService = inject(AuthService);
  carrinhoService = inject(CarrinhoService);

  constructor(private fb: FormBuilder, private router: Router) {
    this.formulario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.formulario.markAllAsTouched();
    if (this.formulario.valid) {
      this.authService.login(this.formulario.value).subscribe({
        next: (res: any) => {
          this.authService.changeUsuario(res.user);
          this.authService.setToken(res.token);
          this.router.navigate(['']);

          this.carrinhoService.refreshCarrinho(true);
        },
        error: (err: any) => {
          const { message } = err.error;
          this.msgErro = message;
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
