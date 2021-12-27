import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Celular } from 'src/app/core/models/recursos/celular/celular.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.main_url + '/api/celulares';

@Injectable({
  providedIn: 'root',
})
export class CelularService {
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: `JWT ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      }),
    };
  }

  getAll(): Observable<Celular[]> {
    return this.http.get<Celular[]>(baseUrl);
  }

  get(id: any): Observable<Celular> {
    return this.http.get<Celular>(`${baseUrl}/` + id, {
      headers: this.httpOptions.headers,
    });
  }

  create(data: any): Observable<Celular> {
    return this.http.post<Celular>(baseUrl, data, {
      headers: this.httpOptions.headers,
    });
  }

  update(id: any, data: any): Observable<Celular> {
    return this.http.put<Celular>(`${baseUrl}/` + id, data, {
      headers: this.httpOptions.headers,
    });
  }

  delete(id: any): Observable<Celular> {
    return this.http.delete<Celular>(`${baseUrl}/` + id, {
      headers: this.httpOptions.headers,
    });
  }
}
