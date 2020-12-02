import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-rated-page',
  templateUrl: './top-rated-page.component.html',
  styleUrls: ['./top-rated-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopRatedPageComponent implements OnInit {

  topRatedTiles = [
    {
      "attractionData": {
        "id": "top101",
        "province": "Samaná",
        "video": "v1Lp_k3ks6A",
        "img": "http://api.drcoderz.com/aws_drtourismskill_imgs/top10/img10_lasterrenas.jpg",
        "name": "Las Terrenas",
        "description": "Las Terrenas is a growing tourist destination known for its pretty landscapes, white sand beaches and clear ocean water.",
        "fullDescription": "Las Terrenas, on the north coast of the Dominican Republic, was once a small fishing village. But that all changed in 1946 when the country’s president ordered rural residents from Santo Domingo to settle here as farmers and fishermen. Today, Las Terrenas is a growing tourist destination known for its pretty landscapes, white sand beaches and clear ocean water. It’s popular with foreigners and Santo Dominicans since it’s only a two-hour drive from the capital. Top beaches include Playas el Portillo and Las Ballenas. Las Terrenas also is a good place to go dolphin and whale watching.",
        "location": {
          "lat": 19.2978607,
          "lng": -69.5766261
        }
      }
    },
    {
      "attractionData": {
        "id": "top102",
        "province": "La Vega",
        "video": "MDZYfFYJFf0",
        "img": "http://api.drcoderz.com/aws_drtourismskill_imgs/top10/img9_jarabacoa.jpg",
        "name": "Jarabacoa",
        "description": "Because of its tropical climate, Jarabacoa is frequently called the city of everlasting spring.",
        "fullDescription": "Because of its tropical climate, Jarabacoa is frequently called the city of everlasting spring. The area is known for its mountains and scenic beauty, including the Jimenoa and Baiguate waterfalls, and the Ebano Verde Scientific Reserve. If you’re an adventuresome visitor, you might try crossing the Jimenoa River on a wood and rope footbridge. More timid travelers may opt for a round of golf on a nine-hole course or a visit to the Cistercian monastery of Santa Maria del Evangelio. Come February, Jarabacoa hosts one of the most famous Carnivals in the country.",
        "location": {
          "lat": 19.1239623,
          "lng": -70.6493447
        }
      }
    },
    {
      "attractionData": {
        "id": "top103",
        "province": "Samaná",
        "video": "T8Y-cQKFvIs",
        "img": "http://api.drcoderz.com/aws_drtourismskill_imgs/top10/img8_playarincon.jpg",
        "name": "Playa Rincón",
        "description": "You’ll enjoy strolling on the soft sandy beach, which, at nearly two miles long means there’s room for everyone. ",
        "fullDescription": "You may be walking on history as you beach comb on Playa Rincon: It’s one of two places in the Dominican Republic rumored to be THE spot where Spanish explorer Christopher Columbus first touched land in 1492. But even if it’s not, you’ll enjoy strolling on the soft sandy beach, which, at nearly two miles long means there’s room for everyone, though you may have to share the beach with stuff the ocean washed in. Still, Playa Rincon is considered one of the most beautiful beaches in the Caribbean. You can get there via a 20-minute boat ride from Las Galeras.",
        "location": {
          "lat": 19.291175,
          "lng": -69.2510587
        }
      }
    },
    {
      "attractionData": {
        "id": "top104",
        "province": "Samaná",
        "video": "qvGUoD452bg",
        "img": "http://api.drcoderz.com/aws_drtourismskill_imgs/top10/img7_ellimon.jpg",
        "name": "Salto El Limón",
        "description": "El Limon is a spectacular waterfall that drops 50 mt. (170 ft.) near the Atlantic Coast side of the Dominican Republic. ",
        "fullDescription": "El Limon waterfall definitely doesn’t live up to its name, The Lemon. Instead, El Limon is a spectacular waterfall that drops 50 meters (170 fee)t near the Atlantic Coast side of the Dominican Republic. Getting there can be a sweaty and wet ordeal since you’ll cross several rivers on horseback (the main way to get there), but once there, you can cool off in the spectacular swimming hole at the bottom of the falls. You may need the dip even more if you’ve opted to walk the 40-minute trail over sometimes steep terrain.",
        "location": {
          "lat": 19.2703944,
          "lng": -69.4477773
        }
      }
    },
    {
      "attractionData": {
        "id": "top105",
        "province": "Santo Domingo",
        "video": "105brkVmtTs",
        "img": "http://api.drcoderz.com/aws_drtourismskill_imgs/top10/img6_santodomingo.jpg",
        "name": "Santo Domingo",
        "description": "Santo Domingo is the capital of the Dominican Republic and its largest city. ",
        "fullDescription": "Santo Domingo is the capital of the Dominican Republic and its largest city – indeed, it has the largest metropolitan area in the Caribbean. Founded in 1496 on the Ozama River, it is the oldest European settlement in the Americas. It also holds a number of other New World firsts: capital of the Spanish empire, castle (Alcazar de Colon), monastery, cathedral (Cathedral Santa Maria la Menor) and university. The best place to take in this rich history is, of course, the historic district where you’ll find majestic buildings reflecting Middle Ages architecture. You can also see the Fortaleza Ozama, the oldest fortress in the Americas. ",
        "location": {
          "lat": 18.4800103,
          "lng": -70.0170518
        }
      }
    },
    {
      "attractionData": {
        "id": "top106",
        "province": "Puerto Plata",
        "video": "7kehLyeUQg8",
        "img": "http://api.drcoderz.com/aws_drtourismskill_imgs/top10/img5_cabarete.jpg",
        "name": "Cabarete",
        "description": "If you’re into adventure sports, Cabarete is a good place to indulge yourself. ",
        "fullDescription": "If you’re into adventure sports, Cabarete is a good place to indulge yourself. Founded in 1835 by former slave owner, this once quiet fishing village is now a kite-surfer’s dream, hosting many international competitions. It’s one of the most popular surfing spots in the Caribbean. Cabarete has a good infrastructure for tourism, with top hotels and eateries, all of which are easy to find, since the village has only one main street. Cabarete has pretty beaches, but if you get tired of them you can explore nearby caves or go kayaking, snorkeling or scuba diving.",
        "location": {
          "lat": 19.7612695,
          "lng": -70.4417076
        }
      }
    },
    {
      "attractionData": {
        "id": "top107",
        "province": "Samaná",
        "video": "KHX8T9x3LC0",
        "img": "http://api.drcoderz.com/aws_drtourismskill_imgs/top10/img4_samana.jpg",
        "name": "Samaná",
        "description": "Thousands of humpback whales head to the Samana Bay to give birth between January and March. ",
        "fullDescription": "Samana, capital of the province with the same name, is a pretty, historic town located on northern Samana Bay. Its main claim to fame is that it’s the last stop Christopher Columbus made the New World in 1493 before heading back to Spain. In more modern times, it’s a great place to go whale-watching, since thousands of humpback whales head to the bay to give birth between January and March. During these months, Samana is the tourism capital of the Dominican Republic. It may interest baseball fans to know that several notable pitchers, including Wily Peralta, grew up here.",
        "location": {
          "lat": 19.2076483,
          "lng": -69.3482985
        }
      }
    },
    {
      "attractionData": {
        "id": "top108",
        "province": "La Altagracia",
        "video": "7c-OqSBaemA",
        "img": "http://api.drcoderz.com/aws_drtourismskill_imgs/top10/img3_bayahibe.jpg",
        "name": "Bayahíbe",
        "description": "The former fishing village is now one of the top places to visit in the Dominican Republic.",
        "fullDescription": "In a country that is known for its beach destinations, the resort town of Bayahibe is no exception. The former fishing village is now one of the top places to visit in the Dominican Republic. Bayahibe Beach is located less than a mile from town, but you’re more likely to visit here to catch a boat to Saona and its fabulous beaches located within a national park. Bayahibe also is the best scuba diving locations in the country, with more than 20 dive sites. Don’t scuba dive? How about stand-up paddle boarding or snorkeling?",
        "location": {
          "lat": 18.3216789,
          "lng": -68.8384033
        }
      }
    },
    {
      "attractionData": {
        "id": "top109",
        "province": "Puerto Plata",
        "video": "dXLw0l5CCVs",
        "img": "http://api.drcoderz.com/aws_drtourismskill_imgs/top10/img2_sosua.jpg",
        "name": "Sosúa",
        "description": "Sosua is a popular destination for diving enthusiasts who like the calm waters and reef structures.",
        "fullDescription": "In 1938, long before the Dominican Republic became a top tourist destination, its president offered safe haven to 100,000 Jewish refugees. About 800 settled in Sosua and were given land where they started a dairy and cheese factory. You can eat products from Productos Sosua today. Sosua is a popular destination for diving enthusiasts who like the calm waters, reef structures and the many varieties of fish they’ll see. Sosua is a place where nature is still making beaches, some naturally and others by storms. By day, Sosua is a typical beach resort; by night, it’s a haven for party animals.",
        "location": {
          "lat": 19.7629451,
          "lng": -70.5130007
        }
      }
    },
    {
      "attractionData": {
        "id": "top1010",
        "province": "La Altagracia",
        "video": "v0LzM2Amy5U",
        "img": "http://api.drcoderz.com/aws_drtourismskill_imgs/top10/img1_puntacana.jpg",
        "name": "Punta Cana",
        "description": "One of the most popular resort destinations in the Caribbean. Located on the eastern tip of the Dominican Republic.",
        "fullDescription": "Thousands of tourists flock the beaches of Punta Cana, one of the most popular resort destinations in the Caribbean. Located on the eastern tip of the Dominican Republic, Punta Cana’s public beach is also popular for water sports including surfing and kayaking. The area is served by an airstrip with regular flights and charters bringing pleasure-seekers to its world-class golf courses and the nearby Scape Park where adventure seekers can enjoy a zipline tour, dune buggies, and visit the refreshing Hoyo Azul Lagoon.",
        "location": {
          "lat": 18.6406656,
          "lng": -68.611431
        }
      }
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onTileClick(): void {
    this.router.navigate(['/details']);
  }
}
