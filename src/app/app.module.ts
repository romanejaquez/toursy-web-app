import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { TabNavComponent } from './components/tab-nav/tab-nav.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByActivityPageComponent } from './pages/by-activity-page/by-activity-page.component';
import { ToursyTileComponent } from './components/toursy-tile/toursy-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MapPageComponent,
    DetailsPageComponent,
    ProfilePageComponent,
    FavoritesPageComponent,
    Error404PageComponent,
    SplashScreenComponent,
    HeaderComponent,
    TabNavComponent,
    TopRatedPageComponent,
    ByRegionPageComponent,
    ByActivityPageComponent,
    ToursyTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
