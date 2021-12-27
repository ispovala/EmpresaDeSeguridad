import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arma } from 'src/app/core/models/recursos/arma/arma.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.main_url + '/api/armas';

@Injectable({
  providedIn: 'root',
})
export class ArmaService {
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: `JWT ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      }),
    };
  }

  getAll(): Observable<Arma[]> {
    return this.http.get<Arma[]>(baseUrl);
  }

  get(id: any): Observable<Arma> {
    return this.http.get<Arma>(`${baseUrl}/` + id, {
      headers: this.httpOptions.headers,
    });
  }

  create(data: any): Observable<Arma> {
    return this.http.post<Arma>(baseUrl, data, {
      headers: this.httpOptions.headers,
    });
  }

  update(id: any, data: any): Observable<Arma> {
    return this.http.put<Arma>(`${baseUrl}/` + id, data, {
      headers: this.httpOptions.headers,
    });
  }

  delete(id: any): Observable<Arma> {
    return this.http.delete<Arma>(`${baseUrl}/` + id, {
      headers: this.httpOptions.headers,
    });
  }
}
