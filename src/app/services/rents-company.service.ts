import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const headers = new HttpHeaders().set('Authorization', `Token ${environment.API_KEY}`);
@Injectable({
  providedIn: 'root'
})

export class RentsCompanyService {

  private apiUrlRents = `${environment.URL}/api/rents-companys`;

  constructor(private http: HttpClient) { }

  getRentsbyCompany(): Observable<any> {
    return this.http.get<any>(this.apiUrlRents, {headers});
  }
}
