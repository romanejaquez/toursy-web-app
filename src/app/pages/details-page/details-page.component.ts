import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsPageComponent implements OnInit {

  currentAttraction = {
    "attractionData": {
      "id": "top101",
      "province": "Samaná",
      "video": "MDZYfFYJFf0",
      "img": "http://api.drcoderz.com/aws_drtourismskill_imgs/top10/img10_lasterrenas.jpg",
      "name": "Las Terrenas",
      "description": "Las Terrenas is a growing tourist destination known for its pretty landscapes, white sand beaches and clear ocean water.",
      "fullDescription": "Las Terrenas, on the north coast of the Dominican Republic, was once a small fishing village. But that all changed in 1946 when the country’s president ordered rural residents from Santo Domingo to settle here as farmers and fishermen. Today, Las Terrenas is a growing tourist destination known for its pretty landscapes, white sand beaches and clear ocean water. It’s popular with foreigners and Santo Dominicans since it’s only a two-hour drive from the capital. Top beaches include Playas el Portillo and Las Ballenas. Las Terrenas also is a good place to go dolphin and whale watching.",
      "location": {
        "lat": 19.2978607,
        "lng": -69.5766261
      }
    }
  };

  favorited: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
