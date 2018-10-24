import { Component } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title : 'Blog';

   
  constructor(){
    var config = {
      apiKey: "AIzaSyBEUd_43q_kgQWYPYVjmKqbHatCfeTg50M",
      authDomain: "openclassrom-20506.firebaseapp.com",
      databaseURL: "https://openclassrom-20506.firebaseio.com",
      projectId: "openclassrom-20506",
      storageBucket: "openclassrom-20506.appspot.com",
      messagingSenderId: "266165861643"
    };
    firebase.initializeApp(config);
  }
}
