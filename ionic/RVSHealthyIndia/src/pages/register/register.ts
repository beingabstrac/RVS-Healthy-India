import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private afuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  register() {
    this.afuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value).then(data => {
      this.navCtrl.setRoot('LoginPage');
    })
  }

}
