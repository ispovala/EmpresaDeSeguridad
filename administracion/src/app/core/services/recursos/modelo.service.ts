import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Modelo } from '../../models/recursos/modelo.model';

const baseUrl = environment.main_url + '/api/modelos';

@Injectable({
  providedIn: 'root',
})
export class ModeloService {
  constructor(private http: HttpClient) {}

  getAll(marca: number | undefined): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(baseUrl + '/' + marca);
  }
}
