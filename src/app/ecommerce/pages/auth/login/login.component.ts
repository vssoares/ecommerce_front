import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeAnimation } from 'src/app/shared/animations';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeAnimation],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  msgErro: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    // this.formulario.setValue({
    //   email: 'vsss23@hotmail.com',
    //   password: 'vs23012001',
    // })
  }

  login() {
    this.formulario.markAllAsTouched();
    if (this.formulario.valid) {
      this.authService.login(this.formulario.value).subscribe(
        (res: any) => {
          this.authService.changeUsuario(res.user);
          this.authService.setToken(res.token);
          this.router.navigate(['']);
        },
        (err: any) => {
          let { message } = err.error;
          this.msgErro = message;
        }
      );
    }
  }
}
