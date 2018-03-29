import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Child } from '../../models/child/child.model';
import { ChildListService } from '../../services/child-list/child-list.service';

@IonicPage()
@Component({
  selector: 'page-show-child',
  templateUrl: 'show-child.html',
})
export class ShowChildPage {

  child$: Observable<Child[]>; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private childList: ChildListService) {
    this.child$ = this.childList
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowChildPage');
  }

}
