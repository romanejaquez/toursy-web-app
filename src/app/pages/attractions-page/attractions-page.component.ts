import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TileModel } from 'src/app/models/tile-model';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-attractions-page',
  templateUrl: './attractions-page.component.html',
  styleUrls: ['./attractions-page.component.scss']
})
export class AttractionsPageComponent implements OnInit {

  attractionType: string = '';
  routeSub: any;
  attractionsSub: any;
  attractionTiles: TileModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private proxyService: ProxyService) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      this.attractionType = params["type"];
      this.processAttractionsByType();
    });
  }

  processAttractionsByType() {
    this.attractionTiles = [];
    this.attractionsSub = this.proxyService.
    getAttractionsListByType(this.attractionType).subscribe(topAttractions => {
      let processedAttractions = topAttractions.map((attraction: any) => {
        
        let topLabelValue = this.attractionType === 'toprated' ? attraction.name : 
        (this.attractionType === 'byregion' ? attraction.region :
        (this.attractionType === 'byactivity' ? attraction.name : ''));
        
        let bottomLabelValue = this.attractionType === 'toprated' ? attraction.province : 
        (this.attractionType === 'byregion' ? `${attraction.attractions.length} attractions` :
        (this.attractionType === 'byactivity' ? `${attraction.attractions.length} attractions` : ''));

        return {
          id: attraction.id,
          topLabel: topLabelValue,
          bottomLabel: bottomLabelValue,
          img: attraction.img,
          isSelected: attraction.isSelected,
          allowFavorites: this.attractionType === 'toprated',
          tileType: this.attractionType === 'toprated' ? 'attraction' : 'list',
          tileSubType: this.attractionType
        };
      });
      this.attractionTiles = processedAttractions;
    });
    this.proxyService.callAttractionsAPIByType(this.attractionType);
  }

  ngOnDestroy(): void {
    this.attractionsSub.unsubscribe();
  }
}
