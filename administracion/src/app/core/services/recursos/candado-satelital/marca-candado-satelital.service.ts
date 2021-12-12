import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarcaCandadoSatelital } from 'src/app/core/models/recursos/candado-satelital/marca-candado-satelital.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.main_url + '/api/marca_candado_satelital';

@Injectable({
  providedIn: 'root',
})
export class MarcaCandadoSatelitalService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<MarcaCandadoSatelital[]> {
    return this.http.get<MarcaCandadoSatelital[]>(baseUrl);
  }
}
