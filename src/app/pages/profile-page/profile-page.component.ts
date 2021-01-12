import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import firebase from 'firebase/app';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilePageComponent implements OnInit {

  authUser!: Observable<firebase.User>;
  favorites!: Observable<any[]>;

  constructor(
    private proxyService: ProxyService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authUser = this.loginService.getLoggedInUser();
    this.favorites = this.proxyService.getFavoritesList();
  }

  goToMain() {
    this.router.navigate(['/main/attractions/toprated']);
  }

  logout() {
    this.loginService.logout();
  }
}
