import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authUser: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  
  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  loginWithGoogle(): Observable<any>{
    return new Observable((observer: Observer<any>) => {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response: firebase.auth.UserCredential) => {
        if (response.user) {
          this.authUser.next(response.user);
          observer.next({});
          observer.complete();
        }
      });
    });
  }

  logout() {
    this.auth.signOut().then(() => {
      this.cleanUp();
      this.router.navigate(['/welcome']);
    });
  }

  getLoggedInUser() {
    return this.authUser.asObservable();
  }

  cleanUp() {
    this.authUser.next(null);
  }
}
