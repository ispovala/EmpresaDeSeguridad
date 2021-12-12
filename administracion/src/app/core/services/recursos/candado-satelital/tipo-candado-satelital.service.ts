import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoCandadoSatelital } from 'src/app/core/models/recursos/candado-satelital/tipo-candado-satelital.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.main_url + '/api/tipo_candado_satelital';

@Injectable({
  providedIn: 'root',
})
export class TipoCandadoSatelitalService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<TipoCandadoSatelital[]> {
    return this.http.get<TipoCandadoSatelital[]>(baseUrl);
  }
}
