import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {} from 'googlemaps';
import { Subscription } from 'rxjs';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapPageComponent implements OnInit, OnDestroy {

  map!: google.maps.Map;
  mapMarkers: google.maps.Marker[] = [];
  mapSelectedAtraction: any;
  showToast: boolean = false;
  appAllDataSub!: Subscription;

  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    zoom: 8
  };

  constructor(
    private router: Router,
    private proxyService: ProxyService) { }

  ngOnInit(): void {

    this.center = {
      lat: 19.0142894,
      lng: -70.6513818
    };

    this.map = new google.maps.Map(document.getElementById('map-canvas') as HTMLElement, 
    {
      ...this.options,
      center: this.center
    });

    this.map.addListener('click', () => {
      this.showToast = false;
    });

    this.processMarkers();

    this.appAllDataSub = this.proxyService.getAllAppData().subscribe(() => {
      if (this.mapMarkers.length === 0) {
        this.processMarkers();
      }
    });
  }

  processMarkers() {
    this.proxyService.getAllAttractionsCombined().forEach((attraction) => {
      let marker = new google.maps.Marker({
        position: attraction.location,
        icon: {
          url: './assets/icons/icon_map_pin.svg',
          scaledSize: new google.maps.Size(50, 50)
        },
        map: this.map
      });

      marker.addListener('click', () => {
        this.mapMarkers.forEach((m: google.maps.Marker) => {
          m.setIcon({
            url: './assets/icons/icon_map_pin.svg',
            scaledSize: new google.maps.Size(50, 50)
          });
        });

        marker.setIcon({
          url: './assets/icons/icon_map_pin_selected.svg',
          scaledSize: new google.maps.Size(50, 50)
        });

        this.mapSelectedAtraction = attraction;
        this.showToast = true;
      });

      this.mapMarkers.push(marker);
    });
  }

  onMapToastClick() {
    this.router.navigate(['/details', this.mapSelectedAtraction.id]);
  }

  ngOnDestroy(): void {
    this.appAllDataSub.unsubscribe();
  }
}
