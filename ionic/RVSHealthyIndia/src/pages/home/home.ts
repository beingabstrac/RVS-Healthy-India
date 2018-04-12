import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string = "";

  constructor(private afauth: AngularFireAuth, public navCtrl: NavController) {
    this.email = afauth.auth.currentUser.email;
  }

  logout() {
    this.afauth.auth.signOut().then(data => {
      this.navCtrl.setRoot('LoginPage');
    })
  }

  addchild() {
    this.navCtrl.push('AddChildPage');
  }

  showchild() {
    this.navCtrl.push('ShowChildPage');
  }

  vaccMaps() {
    this.navCtrl.push('VaccMapsPage');
  }

}
