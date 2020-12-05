import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
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
import { ToursyTileComponent } from './components/toursy-tile/toursy-tile.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavContentComponent } from './components/nav-content/nav-content.component';
import { AttractionsPageComponent } from './pages/attractions-page/attractions-page.component';
import { AttractionsListPageComponent } from './pages/attractions-list-page/attractions-list-page.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';

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
    ToursyTileComponent,
    SideNavComponent,
    NavContentComponent,
    AttractionsPageComponent,
    AttractionsListPageComponent,
    SubHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
