import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private afauth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    this.afauth.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(data => {
      this.navCtrl.setRoot('HomePage');
    })
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

}
