import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../../models/recursos/vehiculo.model';

const baseUrl = environment.main_url + '/api/vehiculos';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {

  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: `JWT ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      }),
    };
  }

  getAll(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(baseUrl);
  }

  get(placa: string): Observable<Vehiculo> {
    return this.http.get<Vehiculo>(`${baseUrl}/` + placa);
  }

  create(data: any): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(baseUrl, data, {headers: this.httpOptions.headers});
  }

  update(placa: string, data: any): Observable<Vehiculo> {
    return this.http.put<Vehiculo>(`${baseUrl}/` + placa, data);
  }

  delete(placa: string): Observable<Vehiculo> {
    return this.http.delete<Vehiculo>(`${baseUrl}/` + placa, {headers: this.httpOptions.headers});
  }
}
