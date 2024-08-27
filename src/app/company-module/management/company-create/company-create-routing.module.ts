import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyCreatePage } from './company-create.page';
import { Step1Component } from '../../components/create/step1/step1.component';
import { Step2Component } from '../../components/create/step2/step2.component';
import { Step3Component } from '../../components/create/step3/step3.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyCreatePage,
    children: [
      {
        path: 'step1',
        component: Step1Component
      },
      {
        path: 'step2',
        component: Step2Component
      },
      {
        path: 'step3',
        component: Step3Component
      },
      {
        path: '',
        redirectTo: 'step1',
        pathMatch: 'full'
      }
    ]
  }
];CompanyCreatePage

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyCreatePageRoutingModule {}
