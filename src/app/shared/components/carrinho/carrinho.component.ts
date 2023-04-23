import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { fadeAnimation, toggleCarrinho } from '../../animations';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  animations:[fadeAnimation,toggleCarrinho]
})
export class CarrinhoComponent implements OnInit {
  carrinhoStatus: boolean = false;
  usuario: any
  constructor(
    private carrinhoService: CarrinhoService,
    private authService: AuthService
  ) { 

    this.authService.currentUsuario.subscribe(usuario => {
      this.usuario = usuario
    })

    this.carrinhoService.carrinhoSubject.subscribe((status: any) => {
      this.carrinhoStatus = !this.carrinhoStatus;
      console.log('Carrinho status: ', status);
      
      if (status) {
        document.querySelector('body')?.classList.add('overflow-hidden');
      } else {
        document.querySelector('body')?.classList.remove('overflow-hidden');
      }
    });
  }

  ngOnInit() {
  }

  closeCarrinho(){
    this.carrinhoService.hide();
  }

}
