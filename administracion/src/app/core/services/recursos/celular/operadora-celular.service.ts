import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OperadoraCelular } from 'src/app/core/models/recursos/celular/operadora-celular.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.main_url + '/api/operadoras_celulares';

@Injectable({
  providedIn: 'root',
})
export class OperadoraCelularService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<OperadoraCelular[]> {
    return this.http.get<OperadoraCelular[]>(baseUrl);
  }
}
