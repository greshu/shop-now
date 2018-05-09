import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  loadFeature: string = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDJiis8KASJqFDWaez07pQ8KFhwa2LqH6s",
      authDomain: "shop-now-ed05b.firebaseapp.com"
    })
  }

  OnSelectFeature(feature: string){
    this.loadFeature = feature;
  }
}
