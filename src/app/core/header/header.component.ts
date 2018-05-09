import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    @Output() selectFeatureEvent = new EventEmitter<string>();
    isLoggedIn: boolean;
    loginSunscriber = new Subscription();
    constructor(private authservice: AuthService){

    }

    ngOnInit() {
        this.loginSunscriber = this.authservice.changedLoggedIn.subscribe(
            (isLoggedIn)=>{
                this.isLoggedIn = isLoggedIn;
            }
        );
        var test = Observable.create((observer: Observer<string>)=>{
            setTimeout(() => {
                observer.next("First Package");
            }, 1000);
            setTimeout(() => {
                observer.next("Second Package");
            }, 5000);
            setTimeout(() => {
                observer.error("Error Package");
            }, 6000);
        })

        test.subscribe((successData: string)=>{
            //console.log(successData);
        },
        (errorData: string)=>{
            //console.error(errorData);
        })
    }

    ngOnDestroy(){
        this.loginSunscriber.unsubscribe();
    }

    selectFeature(feature) {
        this.selectFeatureEvent.emit(feature);
    }

    signOut(){
        this.authservice.signout()
    }
}