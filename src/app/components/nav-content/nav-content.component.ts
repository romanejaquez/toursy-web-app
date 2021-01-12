import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { ProxyService } from 'src/app/services/proxy.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavContentComponent implements OnInit {

  authUser!: Observable<firebase.User>;
  favorites!: Observable<any[]>;

  constructor(
    private proxyService: ProxyService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.authUser = this.loginService.getLoggedInUser();
    this.favorites = this.proxyService.getFavoritesList();
  }

  onLogout() {
    this.loginService.logout();
  }
}
