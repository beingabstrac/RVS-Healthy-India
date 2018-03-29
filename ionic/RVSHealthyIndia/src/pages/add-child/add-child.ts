import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Child } from '../../models/child/child.model';
import { ChildListService } from '../../services/child-list/child-list.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the AddChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-child',
  templateUrl: 'add-child.html',
})
export class AddChildPage {

  child: Child = {
    asha_worker_id: undefined,
    birth_certificate_number: undefined
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
      this.toast.show(`${child.asha_worker_id} added!`)
      this.navCtrl.setRoot('HomePage', { key: ref.key })
    })
  }

}
