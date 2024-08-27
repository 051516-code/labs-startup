import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyCreatePageRoutingModule } from './company-create-routing.module';

import { CompanyCreatePage } from './company-create.page';
import { Step1Component } from '../../components/create/step1/step1.component';
import { Step2Component } from '../../components/create/step2/step2.component';
import { Step3Component } from '../../components/create/step3/step3.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyCreatePageRoutingModule,

  ],
  declarations: [
    CompanyCreatePage,
     Step1Component,
      Step2Component,
      Step3Component
    ]
})
export class CompanyCreatePageModule {}
