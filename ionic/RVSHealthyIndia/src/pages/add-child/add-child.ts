import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Child } from '../../models/child/child.model';
import { ChildListService } from '../../services/child-list/child-list.service';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-add-child',
  templateUrl: 'add-child.html',
})
export class AddChildPage {

  child: Child = {
    asha_worker_id: undefined,
    birth_certificate_number: undefined,
    child_id: undefined,
    child_name: undefined,
    child_blood_group: undefined,
    dob: undefined,
    gender: undefined,
    height: undefined,
    weight: undefined,
    husband_name: undefined,
    mother_blood_group: undefined,
    mother_id: undefined,
    mother_name: undefined,
    phone_number_one: undefined,
    phone_number_two: undefined
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private childList: ChildListService,
    private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddChildPage');
  }

  addChild(child: Child) {
    this.childList.addChild(child).then(ref => {
      this.toast.show(`Deatils added successfully!`)
      this.navCtrl.setRoot('HomePage', { key: ref.key })
    })
  }

}
