import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  produtos: any;
  subs: Subscription[] = [];

  constructor(private service: HomeService) {
    this.produtos = [];

    for (let i = 0; i < 20; i++) {
      this.produtos.push({ skeleton: true });
    }
    this.carregarProdutos();
  }

  ngOnInit() {
    console.log();
  }

  carregarProdutos() {
    this.subs.push(
      this.service.getProdutos().subscribe({
        next: (dados: any) => {
          this.produtos = dados;
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.map(sub => {
      sub.unsubscribe();
    });
  }
}
