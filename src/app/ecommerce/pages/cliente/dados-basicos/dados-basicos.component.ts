import { LoaderService } from './../../../../shared/components/loader/loader-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-dados-basicos',
  templateUrl: './dados-basicos.component.html',
  styleUrls: ['./dados-basicos.component.scss'],
})
export class DadosBasicosComponent implements OnInit {
  dados$!: Observable<any>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.dados$ = this.activatedRoute.data.pipe(map(data => data));
    this.dados$.subscribe({
      next: () => {
        this.loaderService.hide();
      },
    });
  }
}
