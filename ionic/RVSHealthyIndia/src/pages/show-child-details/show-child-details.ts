import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Child } from '../../models/child/child.model';
import { ChildListService } from '../../services/child-list/child-list.service';

@IonicPage()
@Component({
  selector: 'page-show-child-details',
  templateUrl: 'show-child-details.html',
})
export class ShowChildDetailsPage {

  child: Child;
  childDetails$: Observable<Child[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private childList: ChildListService) {
    this.childDetails$ = this.childList
    .getChild()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    )
  }

  ionViewWillLoad() {
    this.child = this.navParams.get('child');
  }

  vaccination() {
    this.navCtrl.push('VaccinationPage');
  }

}
