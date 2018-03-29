import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditChildDetailPage } from './edit-child-detail';

@NgModule({
  declarations: [
    EditChildDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EditChildDetailPage),
  ],
})
export class EditChildDetailPageModule {}
