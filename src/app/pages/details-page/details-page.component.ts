import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ProxyService } from 'src/app/services/proxy.service';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsPageComponent implements OnInit {

  authUser!: Observable<firebase.User>;
  routeSub: any;
  currentAttraction: any;
  favorited: boolean = false;

  constructor(
    public location: Location,
    public sanitizer: DomSanitizer,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private proxyService: ProxyService) { }

  ngOnInit(): void {

    this.authUser = this.loginService.getLoggedInUser();
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      let attractionId = params['id'];
      this.currentAttraction = this.proxyService.getAttractionById(attractionId);
      this.currentAttraction.video = 'https://www.youtube.com/embed/' + this.currentAttraction.video;
    });
  }

  onBackClick(): void {
    this.location.back();
  }

  onAttractionFavorited() {
    this.proxyService.markAttractionAsSelected(
      this.currentAttraction.id, !this.currentAttraction.isSelected);
  }
}
