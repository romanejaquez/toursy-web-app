import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttractionsListPageComponent } from './pages/attractions-list-page/attractions-list-page.component';
import { AttractionsPageComponent } from './pages/attractions-page/attractions-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    component: MainPageComponent,
    path: 'main',
    children: [
      {
        component: AttractionsPageComponent,
        path: 'attractions/:type'
      },
      {
        component: MapPageComponent,
        path: 'mapview'
      }
    ],
  },
  {
    component: AttractionsListPageComponent,
    path: 'list/:by/:id'
  },
  {
    component: DetailsPageComponent,
    path: 'details/:id'
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
    component: WelcomePageComponent,
    path: 'welcome'
  },
  {
    redirectTo: '/welcome',
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
