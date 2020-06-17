import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  _isOpen = false;

  constructor() { }

  isOpen(): boolean {
    return this._isOpen;
  }

  toggle() {
    this._isOpen = !this._isOpen;
  }
}
