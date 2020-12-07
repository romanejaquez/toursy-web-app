import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TileModel } from 'src/app/models/tile-model';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'toursy-tile',
  templateUrl: './toursy-tile.component.html',
  styleUrls: ['./toursy-tile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToursyTileComponent implements OnInit {

  @Input() tileModel!: TileModel;

  constructor(
    private router: Router,
    private proxyService: ProxyService) { }

  ngOnInit(): void {
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
