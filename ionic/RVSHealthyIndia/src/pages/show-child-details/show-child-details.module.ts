import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowChildDetailsPage } from './show-child-details';

@NgModule({
  declarations: [
    ShowChildDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowChildDetailsPage),
  ],
})
export class ShowChildDetailsPageModule {}
