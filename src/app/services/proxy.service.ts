import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, Observer, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginService } from './login.service';
import firebase from 'firebase/app';

const BASE_URL = 'https://us-central1-toursy-242912.cloudfunctions.net/';

@Injectable({
  providedIn: 'root'
})
export class ProxyService implements OnDestroy {
  
  authUser!: firebase.User;
  loginServiceSub!: Subscription;
  getAllAppDataSub!: Subscription;
  allAttractionsList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  attractionsByActivityList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  topAttractions$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  favoriteAttractions$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(
    private loginService: LoginService,
    private firestore: AngularFirestore,
    private httpClient: HttpClient) {

      this.loginServiceSub = this.loginService.getLoggedInUser().subscribe((user: firebase.User) => {
        this.authUser = user;

        if (this.authUser) {
          // restore the data from firebase
          this.getAllAppDataSub = this.getAllAppData().subscribe(() => {
            this.firestore.collection('favorites')
            .doc(this.authUser.uid).ref.get().then(favs => {
              let myFavs: any = favs.data();
              this.getSavedFavorites(myFavs.favorites);
            });
          });
        }
      });
    }

  ngOnDestroy(): void {
    this.loginServiceSub.unsubscribe();
    this.getAllAppDataSub.unsubscribe();
  }

  fetchInitialData() {
    this.getAllAppDataSub = this.getAllAppData().subscribe(done => {
      // data is done loading
    });
  }

  getAllAppData() {
    return new Observable<any>((observer: Observer<any>) => {
      forkJoin(
        [
          this.getAllAttractionsAPI(),
          this.getAttractionsByActivityAPI(),
          this.getTopAttractionsAPI()
        ]).subscribe(
          response => {
            observer.next({});
            observer.complete();
          },
          error => {
            observer.error(error);
            observer.complete();
          }
        )
    });
  }

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
  getAllAttractionsAPI(): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      if (this.allAttractionsList$.value.length === 0) {
        this.httpClient.get(`${BASE_URL}getAllAttractions`)
          .subscribe((response: any) => {
            this.allAttractionsList$.next(response.templateData.attractionsByRegion.map((attraction: any) => {
              return { ...attraction.regionData, isSelected: false }
            }));

            observer.next({});
            observer.complete();
          },
          error => {
            observer.error(error);
            observer.complete();
          });
      }
      else {
        observer.complete();
      }
    });
  }

  // get Attractions by Activity
  getAttractionsByActivityAPI(): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      if (this.attractionsByActivityList$.value.length === 0) {
        this.httpClient.get(`${BASE_URL}getAttractionsByActivity`)
        .subscribe((response: any) => {
            this.attractionsByActivityList$.next(response.templateData.attractionsByActivity.map((attraction: any) => {
              return { ...attraction.activityData, isSelected: false }
            }));

            observer.next({});
            observer.complete();
        },
        error => {
          // todo: handle error
          observer.error(error);
          observer.complete();
        });
      }
      else {
        observer.complete();
      }
    });
  }

  // get Top Attractions
  getTopAttractionsAPI(): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      if (this.topAttractions$.value.length === 0) {
        this.httpClient.get(`${BASE_URL}getTopAttractions`)
          .subscribe((response: any) => {
            this.topAttractions$.next(
              response.templateData.attractions.map((attraction: any) => {
                return { ...attraction.attractionData, isSelected: false }
              }));

              observer.next({});
              observer.complete();
          },
          error => {
            // handle error
            observer.error(error);
            observer.complete();
          });
      }
      else {
        observer.complete();
      }
    })
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

  getSavedFavorites(savedFavs: any[]) {
    this.getAllAttractionsCombined().forEach((attr) => {
      savedFavs.forEach(favId => {
        if (attr.id === favId) {
          attr.isSelected = true;
        }
      });
    });

    this.getFavorites();
  }

  getFavorites() {
    let allFavorites = this.getAllAttractionsCombined().
    filter(a => a.isSelected).
    map(a => {
      return {
        id: a.id,
        topLabel: a.name,
        bottomLabel: a.province,
        img: a.img,
        isSelected: a.isSelected,
        allowFavorites: true
      }
    });

    this.favoriteAttractions$.next(allFavorites);

    if (this.authUser) {
        this.firestore.collection('favorites')
        .doc(this.authUser.uid)
        .set({
          favorites: allFavorites.map((f) => f.id)
        });
    }
  }

  getFavoritesList() {
    return this.favoriteAttractions$.asObservable();
  }

  cleanUp() {
    this.allAttractionsList$.next([]);
    this.attractionsByActivityList$.next([]);
    this.topAttractions$.next([]);
    this.favoriteAttractions$.next([]);
  }
}
