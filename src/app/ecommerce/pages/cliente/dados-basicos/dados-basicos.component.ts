import { LoaderService } from './../../../../shared/components/loader/loader-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { DadosBasicosService } from './dados-basicos.service';

@Component({
  selector: 'app-dados-basicos',
  templateUrl: './dados-basicos.component.html',
  styleUrls: ['./dados-basicos.component.scss'],
})
export class DadosBasicosComponent implements OnInit, OnDestroy {
  dados$!: Observable<any>;

  subs: Subscription[] = [];

  dadosBasicos: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dadosBasicosService: DadosBasicosService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.subs.push(
      this.activatedRoute.data.pipe(map(data => data)).subscribe({
        next: dados => {
          this.dadosBasicosService.dadosBasicosCache = dados;
          this.dadosBasicos = dados;

          this.loaderService.hide();
        },
      })
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.subs.length) {
      this.subs?.forEach((sub: Subscription) => {
        sub.unsubscribe();
      });
    }
  }
}
