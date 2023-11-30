import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders().set('Authorization', `Token ${environment.API_KEY}`);

@Injectable({
  providedIn: 'root'
})

export class BarChartService {

  private apiUrlClients = `${environment.URL}/api/rents-clients`;
  
  constructor(private http: HttpClient) { }

  getRentsbyClients(): Observable<any> {
    return this.http.get<any>(this.apiUrlClients, {headers});
  }

}
