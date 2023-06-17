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
    this.produtos = [
      { skeleton: true },
      { skeleton: true },
      { skeleton: true },
      { skeleton: true },
    ];
    this.carregarProdutos();
  }

  ngOnInit() {
    console.log();
  }

  carregarProdutos() {
    this.subs.push(
      this.service.getProdutos().subscribe(dados => {
        this.produtos = dados;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.map(sub => {
      sub.unsubscribe();
    });
  }
}
