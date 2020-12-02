import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByActivityPageComponent } from './pages/by-activity-page/by-activity-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';

const routes: Routes = [
  {
    component: MainPageComponent,
    path: 'main',
    children: [
      {
        component: TopRatedPageComponent,
        path: 'toprated'
      },
      {
        component: ByRegionPageComponent,
        path: 'byregion'
      },
      {
        component: ByActivityPageComponent,
        path: 'byactivity'
      },
      {
        component: MapPageComponent,
        path: 'mapview'
      }
    ]
  },
  {
    component: DetailsPageComponent,
    path: 'details'
  },
  {
    component: ProfilePageComponent,
    path: 'profile'
  },
  {
    component: FavoritesPageComponent,
    path: 'favorites'
  },
  {
    redirectTo: '/main/toprated',
    path: '',
    pathMatch: 'full'
  },
  {
    component: Error404PageComponent,
    path: '404'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
