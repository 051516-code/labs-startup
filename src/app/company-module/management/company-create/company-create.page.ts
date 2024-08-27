import { Component, OnInit } from '@angular/core';
import { Company } from '../../interfaces/company.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.page.html',
  styleUrls: ['./company-create.page.scss'],
})
export class CompanyCreatePage implements OnInit {
  currentStep: string = 'step1';
  company: Company = {
    id: '',
    name: '',
    logo: '',
    banner: '',
    description: '',
    phoneNumber: '',
    email: '',
    address: {
      street: '',
      cep: ''
    },
    geographicLocation: {
      latitude: 0,
      longitude: 0
    },
    operatingHours: {
      opening: '',
      closing: '',
      specialHours: {}
    },
    serviceAvailability: {},
    type: 'mechanic',
    status: 'active',
    creationDate: new Date(),
    lastUpdateDate: new Date(),
    registrationNumber: '',
    certifications: [],
    gallery: [],
    socials: {},
    reviews: [],
    communicationChannels: {},
    promotions: [],
    activityLog: [],
    statistics: {},
    media: {},
    documents: {},
    ownerId: '',
  };

  ngOnInit() {}

  onStepChange(event: any) {
    this.currentStep = event.detail.value;
  }
}
