import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../../models/recursos/color.model';

const baseUrl = environment.main_url + '/api/colores';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Color[]> {
    return this.http.get<Color[]>(baseUrl);
  }
}
