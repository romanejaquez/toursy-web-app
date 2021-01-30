import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TileModel } from 'src/app/models/tile-model';
import { LoginService } from 'src/app/services/login.service';
import { ProxyService } from 'src/app/services/proxy.service';
import firebase from 'firebase/app';

@Component({
  selector: 'toursy-tile',
  templateUrl: './toursy-tile.component.html',
  styleUrls: ['./toursy-tile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToursyTileComponent implements OnInit {

  authUser!: Observable<firebase.User>;

  @Input() tileModel!: TileModel;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private proxyService: ProxyService) { }

  ngOnInit(): void {
    this.authUser = this.loginService.getLoggedInUser();
  }

  markAttractionAsSelected(event: any, id: string) {
    this.tileModel.isSelected = !this.tileModel.isSelected;
    this.proxyService.markAttractionAsSelected(id, this.tileModel.isSelected);
    event.stopPropagation();
  }

  onTileClick(): void {
    if (this.tileModel.tileType === 'list') {
      this.router.navigate(['/list', this.tileModel.tileSubType, this.tileModel.id])
    }
    else {
      this.router.navigate(['/details', this.tileModel.id]);
    }
  }
}
