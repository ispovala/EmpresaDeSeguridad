import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, PartialObserver } from 'rxjs';
import { Cargo } from '../../models/user/cargo.model';

const baseUrl = environment.main_url + '/api/cargo/';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http: HttpClient,) { }

  getAll(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(baseUrl);
  }
}
