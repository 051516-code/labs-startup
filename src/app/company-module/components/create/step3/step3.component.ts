import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../../interfaces/company.interface';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component {
  @Input() company!: Company;
  specialHours: String ="";
 

  ngOnInit() {
    // Ensure operatingHours is initialized
    if (!this.company.operatingHours) {
      this.company.operatingHours = {
        opening: '',
        closing: '',
        specialHours: {}
      };
    }

    // Ensure specialHours is initialized
    if (this.company.operatingHours && !this.company.operatingHours.specialHours) {
      this.company.operatingHours.specialHours = {};
    }
  }

  submit() {
    console.log(this.company);
    // Implement your submit logic here
  }
}
