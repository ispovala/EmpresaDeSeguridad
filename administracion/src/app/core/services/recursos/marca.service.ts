import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.main_url + '/api/marcas';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  constructor(private http: HttpClient) {}

  getAll(recurso: number): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + '/' + recurso);
  }
}
