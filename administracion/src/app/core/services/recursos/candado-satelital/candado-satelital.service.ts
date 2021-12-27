import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandadoSatelital } from 'src/app/core/models/recursos/candado-satelital/candado-satelital.model';
import { environment } from 'src/environments/environment';

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
    return this.http.get<CandadoSatelital>(`${baseUrl}/` + id, {
      headers: this.httpOptions.headers,
    });
  }

  create(data: any): Observable<CandadoSatelital> {
    return this.http.post<CandadoSatelital>(baseUrl, data, {
      headers: this.httpOptions.headers,
    });
  }

  update(id: any, data: any): Observable<CandadoSatelital> {
    return this.http.put<CandadoSatelital>(`${baseUrl}/` + id, data, {
      headers: this.httpOptions.headers,
    });
  }

  delete(id: any): Observable<CandadoSatelital> {
    return this.http.delete<CandadoSatelital>(`${baseUrl}/` + id, {
      headers: this.httpOptions.headers,
    });
  }
}
