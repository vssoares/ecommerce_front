import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  _loaderToggle = new Subject();
  loaderStatus = false;

  constructor() {}
  show() {
    this.loaderStatus = true;
    this.setStatus(this.loaderStatus);
  }

  hide() {
    this.loaderStatus = false;
    this.setStatus(this.loaderStatus);
  }
  setStatus(status: boolean) {
    this.loaderStatus = status;
    this._loaderToggle.next(this.loaderStatus);
  }
}
