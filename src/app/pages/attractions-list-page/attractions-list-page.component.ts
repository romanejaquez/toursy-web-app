import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TileModel } from 'src/app/models/tile-model';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-attractions-list-page',
  templateUrl: './attractions-list-page.component.html',
  styleUrls: ['./attractions-list-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AttractionsListPageComponent implements OnInit {

  routeSub: any;
  listBy: string = '';
  listId: string = '';
  listByLabel: string = '';
  listBySubLabel: string = '';

  attractionTiles: TileModel[] = [];
  attractionsSub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private proxyService: ProxyService) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      this.listBy = params["by"];
      this.listId = params["id"];
      this.listByLabel = this.listBy === 'byregion' ? 'By Region' : 'By Activity';

      this.processAttractionListTiles();
    });
  }

  processAttractionListTiles() {
    this.attractionTiles = [];
    this.attractionsSub = this.proxyService.
    getAttractionsListByType(this.listBy).subscribe(attractions => {
      this.attractionTiles = [];
      let foundAttraction: any = attractions.find((a: any) => a.id === this.listId);

      if (foundAttraction) {
        this.listBySubLabel = this.listBy === 'byregion' ? foundAttraction.region : foundAttraction.name;
        
        foundAttraction.attractions.forEach((a:any) => {
          let attr;
          if (typeof(a) === 'string') {
            let foundAttr = this.proxyService.getAttractionById(a);
            if (foundAttr) {
              attr = foundAttr;
            }
          }
          else {
            attr = a;
          }

          this.attractionTiles.push({
            id: attr.id,
            topLabel: attr.name,
            bottomLabel: attr.province,
            img: attr.img,
            isSelected: attr.isSelected,
            allowFavorites: true,
            tileType: 'attraction',
            tileSubType: ''
          });
        });
      }
    });
    this.proxyService.callAttractionsAPIByType(this.listBy);
  }

}
