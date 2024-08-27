import { Component, Input  } from '@angular/core';
import { Company } from '../../../interfaces/company.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component  {

  @Input() company!: Company;
   constructor(private router: Router) {}

  goToNextStep() {
    // Guardar los datos del paso 2
    // Ejemplo: this.companyService.setCompanyData(this.company);

    // Navegar al siguiente paso
    this.router.navigate(['/company-create/step3']);
  }

}
