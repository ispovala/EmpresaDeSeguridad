import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, PartialObserver } from 'rxjs';
import { Persona } from '../../models/user/persona.model';
import { UserService } from '../user/user.service';

const baseUrl = environment.main_url + '/api/personas/';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient, private userService:UserService) { }

  getAll(): Observable<Persona[]> {
    return this.http.get<Persona[]>(baseUrl);
  }


  get(id: any): Observable<Persona> {
    return this.http.get<Persona>(environment.main_url+"/api/persona/"+id);
  }

  create(data: any): Observable<Persona> {
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this.userService.getToken()
    })
    console.log(headers)
    return this.http.post<Persona>(baseUrl, data, { headers } );
  }

  put(data: any, id: any): Observable<Persona> {
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this.userService.getToken()
    })
    return this.http.put<Persona>(environment.main_url+"/api/persona/"+id, data, { headers } );
  }

  delete(id: any): Observable<Persona> {
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this.userService.getToken()
    })
    return this.http.delete<Persona>(environment.main_url+"/api/persona/"+id,{ headers });
  }
}
