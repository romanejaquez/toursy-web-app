import { Component, OnInit } from '@angular/core';
import { ProxyService } from './services/proxy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private proxyService: ProxyService) {}

  ngOnInit(): void {
    this.proxyService.fetchInitialData();
  }
}
