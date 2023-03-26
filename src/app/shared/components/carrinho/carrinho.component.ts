import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { fadeAnimation } from '../../animations';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  carrinhoStatus: boolean = false;

  constructor(
    private carrinhoService: CarrinhoService
  ) { 
    this.carrinhoService.carrinhoSubject.subscribe((status: any) => {
        this.carrinhoStatus = !this.carrinhoStatus;
        console.log('Carrinho status: ', status);
        if (status) {
          document.querySelector('body')?.classList.add('overflow-hidden');
        } else {
          document.querySelector('body')?.classList.remove('overflow-hidden');
        }

      }
    );
  }

  ngOnInit() {
  }

  closeCarrinho(){
    this.carrinhoService.hide();
  }

}
