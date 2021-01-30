import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProxyService } from './services/proxy.service';
import { ThemingService } from './services/theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  theme!: Observable<string>;

  constructor(
    private themingService: ThemingService,
    private proxyService: ProxyService) {}

  ngOnInit(): void {
    this.theme = this.themingService.getTheme();
    this.proxyService.fetchInitialData();
  }
}
