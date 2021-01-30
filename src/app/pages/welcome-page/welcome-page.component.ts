import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CleanupService } from 'src/app/services/cleanup.service';
import { LoginService } from 'src/app/services/login.service';
import { ThemingService } from 'src/app/services/theming.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomePageComponent implements OnInit {

  constructor(
    private cleanupService: CleanupService,
    private loginService: LoginService,
    private router: Router,
    private themingService: ThemingService,
  ) {
    this.themingService.setTheme('light-theme');
  }

  ngOnInit(): void {
    this.cleanupService.cleanUp();
  }

  login() {
    this.loginService.loginWithGoogle().subscribe(() => {
      this.router.navigate(['/profile']);
    })
  }
}
