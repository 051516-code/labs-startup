import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from '../company-module/interfaces/company.interface';

@Injectable({
  providedIn: 'root'
})
export class FakeCompanyService {

  private localStorageKey = 'companies';

  constructor() { }

  // Obtener todas las empresas
  getAllCompanies(): Observable<Company[]> {
    const companies = this.getCompaniesFromLocalStorage();
    return of(companies);
  }

  // Obtener una empresa por su ID
  getCompanyById(id: string): Observable<Company | undefined> {
    const companies = this.getCompaniesFromLocalStorage();
    const company = companies.find(c => c.id === id);
    return of(company);
  }

  // Crear una nueva empresa
  createCompany(company: Company): Observable<Company> {
    const companies = this.getCompaniesFromLocalStorage();
    companies.push(company);
    this.setCompaniesToLocalStorage(companies);
    return of(company);
  }

  // Actualizar una empresa existente
  updateCompany(id: string, updatedCompany: Company): Observable<Company | undefined> {
    let companies = this.getCompaniesFromLocalStorage();
    const index = companies.findIndex(c => c.id === id);
    
    if (index !== -1) {
      companies[index] = updatedCompany;
      this.setCompaniesToLocalStorage(companies);
      return of(updatedCompany);
    }

    return of(undefined);
  }

  // Eliminar una empresa
  deleteCompany(id: string): Observable<void> {
    let companies = this.getCompaniesFromLocalStorage();
    companies = companies.filter(c => c.id !== id);
    this.setCompaniesToLocalStorage(companies);
    return of();
  }

  // Métodos auxiliares para manejar LocalStorage

  private getCompaniesFromLocalStorage(): Company[] {
    const companiesJson = localStorage.getItem(this.localStorageKey);
    return companiesJson ? JSON.parse(companiesJson) : [];
  }

  private setCompaniesToLocalStorage(companies: Company[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(companies));
  }
}
