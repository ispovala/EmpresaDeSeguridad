import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoVehiculo } from 'src/app/core/models/recursos/vehiculo/tipo-vehiculo.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.main_url + '/api/tipo_vehiculo';

@Injectable({
  providedIn: 'root',
})
export class TipoVehiculoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<TipoVehiculo[]> {
    return this.http.get<TipoVehiculo[]>(baseUrl);
  }
}
