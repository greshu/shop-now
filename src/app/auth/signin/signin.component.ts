import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  onSignin(signInForm: NgForm){
    this.authservice.signinUser(signInForm.value.email, signInForm.value.password)
  }

}
