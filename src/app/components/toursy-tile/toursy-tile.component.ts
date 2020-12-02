import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'toursy-tile',
  templateUrl: './toursy-tile.component.html',
  styleUrls: ['./toursy-tile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToursyTileComponent implements OnInit {

  @Input() tileModel: any;

  constructor() { }

  ngOnInit(): void {
  }

}
