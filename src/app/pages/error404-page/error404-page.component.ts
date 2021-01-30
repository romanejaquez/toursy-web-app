import { Component, OnInit } from '@angular/core';
import { ThemingService } from 'src/app/services/theming.service';

@Component({
  selector: 'app-error404-page',
  templateUrl: './error404-page.component.html',
  styleUrls: ['./error404-page.component.scss']
})
export class Error404PageComponent implements OnInit {

  constructor(
    private themingService: ThemingService,
  ) {
    this.themingService.setTheme('dark-theme');
  }

  ngOnInit(): void {
  }

}
