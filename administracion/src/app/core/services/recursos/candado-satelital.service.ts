import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CandadoSatelital } from '../../models/recursos/candado-satelital.model';

const baseUrl = environment.main_url + '/api/candados_satelitales';

@Injectable({
  providedIn: 'root',
})
export class CandadoSatelitalService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<CandadoSatelital[]> {
    return this.http.get<CandadoSatelital[]>(baseUrl);
  }

  get(id: any): Observable<CandadoSatelital> {
    return this.http.get<CandadoSatelital>(`${baseUrl}/` + id);
  }

  create(data: any): Observable<CandadoSatelital> {
    return this.http.post<CandadoSatelital>(baseUrl, data);
  }

  update(id: any, data: any): Observable<CandadoSatelital> {
    return this.http.put<CandadoSatelital>(`${baseUrl}/` + id, data);
  }

  delete(id: any): Observable<CandadoSatelital> {
    return this.http.delete<CandadoSatelital>(`${baseUrl}/` + id);
  }
}
