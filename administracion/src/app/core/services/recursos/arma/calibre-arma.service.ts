import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalibreArma } from 'src/app/core/models/recursos/arma/calibre-arma.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.main_url + '/api/calibres_armas';

@Injectable({
  providedIn: 'root',
})
export class CalibreArmaService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<CalibreArma[]> {
    return this.http.get<CalibreArma[]>(baseUrl);
  }
}
