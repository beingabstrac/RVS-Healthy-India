import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VaccMapsPage } from './vacc-maps';

@NgModule({
  declarations: [
    VaccMapsPage,
  ],
  imports: [
    IonicPageModule.forChild(VaccMapsPage),
  ],
})
export class VaccMapsPageModule {}
