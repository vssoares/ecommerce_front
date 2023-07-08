import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';
import { fadeAnimation, inOutAnimation } from 'src/app/shared/animations';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  animations: [inOutAnimation, fadeAnimation],
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;
  msgErro: any;
  formEvolucao: any = 0;
  numeroItens: any = 8;
  calculo: any = 100 / this.numeroItens;

  _etapa: any;
  get etapa() {
    return this._etapa;
  }
  set etapa(valor: any) {
    this._etapa = this.calculo * valor;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private adapter: DateAdapter<any>
  ) {
    this.formulario = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpf: ['', Validators.required],
      confirmarPassword: ['', Validators.required],
      celular: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      sexo: ['', Validators.required],
    });

    this.formulario.valueChanges.subscribe({
      next: (res: any) => {
        let count = 0;
        for (const key in res) {
          if (this.formulario.get(key)?.valid) {
            count++;
          }
        }
        this.etapa = count;
        this.formEvolucao = this.etapa;
      },
    });
    // altera o locale do datepicker para dd/mm/yyyy
    this.adapter.setLocale('pt-BR');
  }

  ngOnInit() {
    // this.formulario.setValue({
    //   name: 'Vinicius Soares de Santana',
    //   email: 'vsss23@hotmail.com',
    //   password: 'vs23012001',
    //   confirmarPassword: 'vs23012001',
    //   cpf: '12195745975',
    //   celular: '41995716943',
    //   data_nascimento: new Date("2001-01-23"),
    //   sexo: "M"
    // })
  }

  cadastro() {
    this.formulario.markAllAsTouched();
    if (this.formulario.valid) {
      this.authService.cadastrarUsuario(this.formulario.value).subscribe({
        next: (res: any) => {
          console.log(res);
          this.router.navigate(['/login']);
        },
        error: (err: any) => {
          const { message } = err.error;
          this.msgErro = message;
        },
      });
    }
  }
}
