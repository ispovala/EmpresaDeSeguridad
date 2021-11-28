import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CandadoSatelital } from '../../models/recursos/candado-satelital.model';

const baseUrl = environment.main_url + '/api/candados_satelitales';

@Injectable({
  providedIn: 'root',
})
export class CandadoSatelitalService {

  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: `JWT ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      }),
    };
  }

  getAll(): Observable<CandadoSatelital[]> {
    return this.http.get<CandadoSatelital[]>(baseUrl);
  }

  get(id: any): Observable<CandadoSatelital> {
    return this.http.get<CandadoSatelital>(`${baseUrl}/` + id);
  }

  create(data: any): Observable<CandadoSatelital> {
    return this.http.post<CandadoSatelital>(baseUrl, data, {headers: this.httpOptions.headers});
  }

  update(id: any, data: any): Observable<CandadoSatelital> {
    return this.http.put<CandadoSatelital>(`${baseUrl}/` + id, data);
  }

  delete(id: any): Observable<CandadoSatelital> {
    return this.http.delete<CandadoSatelital>(`${baseUrl}/` + id);
  }
}
