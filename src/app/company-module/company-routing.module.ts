import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COMPANY_ROUTES } from './company-routing.constant';

import { CompanyProfileComponent } from './public/company-profile/company-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: COMPANY_ROUTES.CREATE,  // Redirige a la ruta por defecto
    pathMatch: 'full'
  },
  {
    path: COMPANY_ROUTES.CREATE,
    loadChildren: () => import('./management/company-create/company-create.module').then( m => m.CompanyCreatePageModule)
  },
  {
    path: COMPANY_ROUTES.PROFILE,
    component: CompanyProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
