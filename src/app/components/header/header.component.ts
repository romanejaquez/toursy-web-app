import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { LoginService } from 'src/app/services/login.service';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  authUser!: Observable<firebase.User>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.authUser = this.loginService.getLoggedInUser();
  }

  onToggleMenu() {
    this.navigationService.setShowNav(true);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
