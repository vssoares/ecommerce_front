import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';
import { inOutAnimation } from 'src/app/shared/animations';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  animations: [inOutAnimation],
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup
  formEvolucao: any = 0;
  numeroItens: any = 8;
  calculo: any = 100 / this.numeroItens;

  etapa: any = {
    0: 0,
    1: this.calculo,
    2: (this.calculo) * 2,
    3: (this.calculo) * 3,
    4: (this.calculo) * 4,
    5: (this.calculo) * 5,
    6: (this.calculo) * 6,
    7: (this.calculo) * 7,
    8: (this.calculo) * 8,
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
      telefone: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      sexo: ['', Validators.required]
    })

    this.formulario.valueChanges.subscribe(
      (res: any) => {
        let count = 0;
        for (let key in res) {
          if (this.formulario.get(key)?.valid) {
            count++;
          }
        }
        this.formEvolucao = this.etapa[count];
      }
    )

    // altera o locale do datepicker para dd/mm/yyyy
    this.adapter.setLocale('pt-BR');
  }

  ngOnInit() {
    this.formulario.setValue({
      name: 'teste',
      email: 'vsss23@hotmail.com',
      password: 'vs23012001',
      cpf: '12195745975',
      confirmarPassword: 'vs23012001',
      telefone: '41995716943',
      data_nascimento: new Date("2001-01-23"),
      sexo: "M"
    })
  }

  cadastro() {

    console.log(this.formulario.valid);
    
    if (this.formulario.valid) {
      this.authService.cadastrarUsuario(this.formulario.value).subscribe(
        (res: any) => {
          console.log(res);
          this.router.navigate(['/login']);
        },
        (err: any) => {
          console.log(err);
        }
      )
    }
  }

}
