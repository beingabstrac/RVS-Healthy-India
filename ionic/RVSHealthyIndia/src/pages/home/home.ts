import { Component } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afauth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController) {
  }

  ionViewWillLoad() {
    this.afauth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Welcome ${data.email}`,
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: `Could not find authentication details.`,
          duration: 3000
        }).present();
      }
    })
  }

  addchild() {
    this.navCtrl.push('AddChildPage');
  }

  showchild() {
    this.navCtrl.push('ShowChildPage');
  }

}
