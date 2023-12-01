import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

const headers = new HttpHeaders().set('Authorization', `Token ${environment.API_KEY}`);

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private apiUrlClients = `${environment.URL}/api/clients/`;
 
  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get<any>(this.apiUrlClients, {headers});
  }

  delClient(id: string): Observable<any> {
    return this.http.delete(this.apiUrlClients + id, {headers});
  }

  addClient(client: Client): Observable<any> {
    return this.http.post(this.apiUrlClients, client, {headers});
  }

  getClient(id: string): Observable<any> {
    return this.http.get(this.apiUrlClients + id, {headers});
  }

  editClient(id: string, client: Client): Observable<any> {
    return this.http.put(this.apiUrlClients + id + "/", client, {headers});
  }
}
