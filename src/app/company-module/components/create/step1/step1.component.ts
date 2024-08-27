import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../../interfaces/company.interface';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component  implements OnInit {
  @Input() company!: Company;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  goToNextStep() {
    // Guardar los datos del paso 2
    // Ejemplo: this.companyService.setCompanyData(this.company);

    // Navegar al siguiente paso
    this.router.navigate(['/company-create/step3']);
  }
}
