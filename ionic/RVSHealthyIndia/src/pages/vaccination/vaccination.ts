import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-vaccination',
  templateUrl: 'vaccination.html',
})
export class VaccinationPage {

  public event = {
    month: '1990-02-19'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VaccinationPage');
  }

}
