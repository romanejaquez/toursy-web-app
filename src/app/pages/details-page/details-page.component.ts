import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsPageComponent implements OnInit {

  routeSub: any;
  currentAttraction: any;
  favorited: boolean = false;

  constructor(
    public sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private proxyService: ProxyService) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      let attractionId = params['id'];
      this.currentAttraction = this.proxyService.getAttractionById(attractionId);
      this.currentAttraction.video = 'https://www.youtube.com/embed/' + this.currentAttraction.video;
    });
  }

}
