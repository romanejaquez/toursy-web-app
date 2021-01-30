import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  theme$: BehaviorSubject<string> = new BehaviorSubject<string>('dark-theme');

  constructor() { }

  setTheme(themeValue: string) {
    this.theme$.next(themeValue);
  }

  getTheme() {
    return this.theme$.asObservable();
  }
}
