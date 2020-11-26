import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAduanPageRoutingModule } from './list-aduan-routing.module';

import { ListAduanPage } from './list-aduan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAduanPageRoutingModule
  ],
  declarations: [ListAduanPage]
})
export class ListAduanPageModule {}
