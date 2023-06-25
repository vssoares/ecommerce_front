import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from './loader-service.service';
import { Subscription } from 'rxjs';
import { fadeAnimation } from '../../animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [fadeAnimation],
})
export class LoaderComponent implements OnInit, OnDestroy {
  loaderStatus = false;
  subs: Subscription[] = [];
  constructor(private loaderService: LoaderService) {
    this.subs.push(
      this.loaderService._loaderToggle.subscribe({
        next: (status: any) => {
          this.loaderStatus = !this.loaderStatus;
          if (status) {
            document
              .querySelector('body')
              ?.classList.add('body-overflow-hidden');
          } else {
            document
              .querySelector('body')
              ?.classList.remove('body-overflow-hidden');
          }
        },
      })
    );
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    if (this.subs.length) {
      this.subs.forEach((sub: Subscription) => {
        sub.unsubscribe();
      });
    }
  }
}
