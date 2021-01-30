import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ProxyService } from './proxy.service';

@Injectable({
  providedIn: 'root'
})
export class CleanupService {

  constructor(
    private loginService: LoginService,
    private proxyService: ProxyService
  ) { }

  cleanUp() {
    this.loginService.cleanUp();
    this.proxyService.cleanUp();
  }

}
