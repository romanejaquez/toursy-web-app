import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

const BASE_URL = 'https://us-central1-toursy-242912.cloudfunctions.net/';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  allAttractionsList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  attractionsByActivityList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  topAttractions$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  favoriteAttractions$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private httpClient: HttpClient) { }

  getTopAttractions() {
    return this.topAttractions$.asObservable();
  }

  getAttractionsByActivity() {
    return this.attractionsByActivityList$.asObservable();
  }

  getAllAttractions() {
    return this.allAttractionsList$.asObservable();
  }

  // get All Attractions
  getAllAttractionsAPI() {
    if (this.allAttractionsList$.value.length === 0) {
      this.httpClient.get(`${BASE_URL}getAllAttractions`)
      .subscribe((response: any) => {
        this.allAttractionsList$.next(response.templateData.attractionsByRegion.map((attraction: any) => {
          return { ...attraction.regionData, isSelected: false }
        }));
      },
      error => {
        // handle the error
      });
    }
  }

  // get Attractions by Activity
  getAttractionsByActivityAPI() {
    
    if (this.attractionsByActivityList$.value.length === 0) {
      this.httpClient.get(`${BASE_URL}getAttractionsByActivity`)
      .subscribe((response: any) => {
          this.attractionsByActivityList$.next(response.templateData.attractionsByActivity.map((attraction: any) => {
            return { ...attraction.activityData, isSelected: false }
          }));
      },
      error => {
        // todo: handle error
      });
    }
  }

  // get Top Attractions
  getTopAttractionsAPI() {

    if (this.topAttractions$.value.length === 0) {
      this.httpClient.get(`${BASE_URL}getTopAttractions`)
        .subscribe((response: any) => {
          this.topAttractions$.next(
            response.templateData.attractions.map((attraction: any) => {
              return { ...attraction.attractionData, isSelected: false }
            }));
        },
        error => {
          // handle error
        });
    }
  }

  markAttractionAsSelected(id: string, selection: boolean) {

    let allAttractions = this.getAllAttractionsCombined();

    let foundAttraction = allAttractions.find(a => a.id === id);
    if (foundAttraction) {
      foundAttraction.isSelected = selection;
    }

    this.getFavorites();
  }

  getAttractionsListByType(type: string) : Observable<any[]> {
    switch(type) {
      case 'toprated':
        return this.getTopAttractions();
      case 'byregion':
        return this.getAllAttractions();
      case 'byactivity':
        return this.getAttractionsByActivity();
      default:
        return new Observable<any>();
    }
  }

  callAttractionsAPIByType(type: string): void {
    switch(type) {
      case 'toprated':
        this.getTopAttractionsAPI();
        break;
      case 'byregion':
        this.getAllAttractionsAPI();
        break;
      case 'byactivity':
        this.getAttractionsByActivityAPI();
        break;
    }
  }

  getAllAttractionsCombined(): any[] {
    let allAttractions: any[] = [];
    allAttractions = allAttractions.concat(this.topAttractions$.value);

    let regionAttractions: any[] = [];
    this.allAttractionsList$.value.forEach((regionData: any) => {
      regionAttractions = regionAttractions.concat(regionData.attractions);
    });

    allAttractions = allAttractions.concat(regionAttractions);

    this.attractionsByActivityList$.value.forEach((activityData: any) => {
      // this is the only one that brings ids so let's map these 
      let mappedAttractions: any[] = [];
      activityData.attractions.forEach((id: string) => {
        let foundActivityAttraction = allAttractions.find(a => a.id === id);
        if (foundActivityAttraction) {
          mappedAttractions.push(foundActivityAttraction);
        }
      });

      if (mappedAttractions.length > 0){
        activityData.attractions = mappedAttractions;
      }
    });

    allAttractions = allAttractions.concat(this.attractionsByActivityList$.value);

    return allAttractions;
  }

  getAttractionById(id: string) {
    let allAttractions = this.getAllAttractionsCombined();
    let foundAttraction = allAttractions.find(a => a.id === id);
    return foundAttraction;
  }

  getFavorites() {
    this.favoriteAttractions$.next(
      this.getAllAttractionsCombined().filter(a => a.isSelected).
      map(a => {
        return {
          id: a.id,
          topLabel: a.name,
          bottomLabel: a.province,
          img: a.img,
          isSelected: a.isSelected,
          allowFavorites: true
        }
      }));
  }

  getFavoritesList() {
    return this.favoriteAttractions$.asObservable();
  }
}
