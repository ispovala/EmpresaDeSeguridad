import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../../models/recursos/vehiculo.model';

const baseUrl = environment.main_url + '/api/vehiculos';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(baseUrl);
  }

  get(placa: string): Observable<Vehiculo> {
    return this.http.get<Vehiculo>(`${baseUrl}/` + placa);
  }

  create(data: any): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(baseUrl, data);
  }

  update(placa: string, data: any): Observable<Vehiculo> {
    return this.http.put<Vehiculo>(`${baseUrl}/` + placa, data);
  }

  delete(placa: string): Observable<Vehiculo> {
    return this.http.delete<Vehiculo>(`${baseUrl}/` + placa);
  }
}
