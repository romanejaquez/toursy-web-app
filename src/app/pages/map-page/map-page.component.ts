import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {} from 'googlemaps';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapPageComponent implements OnInit {

  map!: google.maps.Map;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    zoom: 8
  };

  constructor(private proxyService: ProxyService) { }

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

    this.proxyService.getTopAttractions().subscribe(
      topAttractions => {
        if (topAttractions && topAttractions.length > 0) {

          topAttractions.forEach(attraction => {

            let marker = new google.maps.Marker({
              position: attraction.location,
              icon: {
                url: './assets/icons/icon_map_pin.svg',
                scaledSize: new google.maps.Size(50, 50)
              },
              map: this.map
            });

            marker.addListener('click', () => {
              alert(attraction.id);
            });

          });
        }
    });


  }

}
