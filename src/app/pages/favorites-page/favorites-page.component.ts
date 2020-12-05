import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FavoritesPageComponent implements OnInit {

  favoriteTiles: Observable<any> = new Observable<any>();

  constructor(private proxyService: ProxyService) { }

  ngOnInit(): void {
    this.favoriteTiles = this.proxyService.getFavoritesList();
  }
}
