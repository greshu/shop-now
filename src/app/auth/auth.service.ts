import * as firebase from 'firebase'
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    token = null;
    isLoggedIn: boolean = false;
    changedLoggedIn = new Subject<boolean>();
    constructor(private router: Router) {
        this.changedLoggedIn.next(this.isLoggedIn);
    }

    signupUser(email: string, password: string) {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error);
            })
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response);
                this.router.navigate(['/'])
                firebase.auth().currentUser.getToken().then((token) => {
                    this.token = token
                })
                this.isLoggedIn = true;
                this.changedLoggedIn.next(this.isLoggedIn);
                return response;
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getRoken() {
        firebase.auth().currentUser.getToken().then((token) => {
            this.token = token
        });
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    signout() {
        firebase.auth().signOut();
        this.token = null;
        this.isLoggedIn = false;
        this.changedLoggedIn.next(this.isLoggedIn);
    }

    changeLoginFlag(isLoogedIn: boolean){
        this.isLoggedIn = isLoogedIn;
        this.changedLoggedIn.next(this.isLoggedIn);
    }
}