import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabNavComponent implements OnInit {

  tabItems = [
    {
      icon: 'top_rated',
      label: 'Top Rated',
      id: '1',
      route: '/main/attractions/toprated'
    },
    {
      icon: 'by_region',
      label: 'By Region',
      id: '2',
      route: '/main/attractions/byregion'
    },
    {
      icon: 'by_activity',
      label: 'By Activity',
      id: '3',
      route: '/main/attractions/byactivity'
    },
    {
      icon: 'map_view',
      label: 'Map View',
      id: '4',
      route: '/main/mapview'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
