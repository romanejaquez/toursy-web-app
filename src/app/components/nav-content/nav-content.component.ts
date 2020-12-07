import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavContentComponent implements OnInit {

  favorites!: Observable<any[]>;

  constructor(private proxyService: ProxyService) { }

  ngOnInit(): void {
    this.favorites = this.proxyService.getFavoritesList();
  }

  onLogout() {
    
  }
}
