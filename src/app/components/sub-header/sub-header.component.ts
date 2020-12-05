import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubHeaderComponent implements OnInit {

  @Input() title!: string;
  @Input() icon!: string;
  @Input() subTitle!: string;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onIconClick() {
    if (this.icon === "arrow_back") {
      this.location.back();
    }
  }
}
