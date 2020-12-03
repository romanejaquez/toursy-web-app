import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { SideNavDirection } from 'src/app/constants/side-nav-direction';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit, OnDestroy {
  showSideNav: boolean = false;
  showSideNavSub: Subscription = new Subscription();

  @Input() sidenavTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: SideNavDirection = SideNavDirection.Left;
  
  constructor(private navService: NavigationService){}

  ngOnInit(): void {
    this.showSideNavSub = this.navService.getShowNav().subscribe(showNav => {
      this.showSideNav = showNav;
    });
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};
    
    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';
    
    return navBarStyle;
  }

  ngOnDestroy() {
    this.showSideNavSub.unsubscribe();
  }
}
