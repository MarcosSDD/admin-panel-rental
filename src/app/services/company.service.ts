import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company';

const headers = new HttpHeaders().set('Authorization', `Token ${environment.API_KEY}`);

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 
  private apiUrlCompanys = `${environment.URL}/api/companys/`;
 
  constructor(private http: HttpClient) { }

  getCompanys(): Observable<any> {
    return this.http.get<any>(this.apiUrlCompanys, {headers});
  }

  delCompany(id: string): Observable<any> {
    return this.http.delete(this.apiUrlCompanys + id, {headers});
  }

  addCompany(company: Company): Observable<any> {
    return this.http.post(this.apiUrlCompanys, company, {headers});
  }

  getCompany(id: string): Observable<any> {
    return this.http.get(this.apiUrlCompanys + id, {headers});
  }

  editCompany(id: string, company: Company): Observable<any> {
    return this.http.put(this.apiUrlCompanys + id + "/", company, {headers});
  }

}
