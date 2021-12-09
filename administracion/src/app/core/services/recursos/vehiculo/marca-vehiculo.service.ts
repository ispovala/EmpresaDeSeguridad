import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarcaVehiculo } from 'src/app/core/models/recursos/vehiculo/marca-vehiculo.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.main_url + '/api/marca_vehiculo';

@Injectable({
  providedIn: 'root',
})
export class MarcaVehiculoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<MarcaVehiculo[]> {
    return this.http.get<MarcaVehiculo[]>(baseUrl);
  }
}
