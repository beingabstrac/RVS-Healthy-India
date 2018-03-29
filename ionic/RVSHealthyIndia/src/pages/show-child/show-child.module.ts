import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowChildPage } from './show-child';

@NgModule({
  declarations: [
    ShowChildPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowChildPage),
  ],
})
export class ShowChildPageModule {}
