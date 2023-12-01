import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders().set('Authorization', `Token ${environment.API_KEY}`);

@Injectable({
  providedIn: 'root'
})
export class RentsService {
  
  private apiUrlRents = `${environment.URL}/api/rents`;

  private apiUrlCost = `${environment.URL}/api/cost-clients`;

  constructor(private http: HttpClient) { }

  getRents(): Observable<any> {
    return this.http.get<any>(this.apiUrlRents, {headers});
  }

  getCost(): Observable<any> {
    return this.http.get<any>(this.apiUrlCost, {headers});
  }
}
