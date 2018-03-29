import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Child } from '../../models/child/child.model';
import { ChildListService } from '../../services/child-list/child-list.service';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-edit-child-detail',
  templateUrl: 'edit-child-detail.html',
})
export class EditChildDetailPage {

  child: Child;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private childList: ChildListService,
    private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.child = this.navParams.get('child');
  }

  saveChild(child: Child) {
    this.childList.editChild(child).then(() => {
      this.toast.show(`${child.asha_worker_id} saved!`)
      this.navCtrl.push('HomePage');
    })
  }

  removeChild(child: Child) {
    this.childList.removeChild(child).then(() => {
      this.toast.show(`${child.asha_worker_id} deleted!`)
      this.navCtrl.push('HomePage');
    })
  }

}
