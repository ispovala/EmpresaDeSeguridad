import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Observable, PartialObserver } from 'rxjs';
import { User } from '../../models/user/user.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.main_url + '/api/users/';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,
    private _userService: UserService) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  get(id: any): Observable<User> {
    return this.http.get<User>( environment.main_url+"/api/usuario/"+id);
  }

  create(data: any): Observable<User> {
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this._userService.getToken()
    })
    return this.http.post<User>(baseUrl, data, { headers } );
  }

  put(data: any, id: any): Observable<User> {
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this._userService.getToken()
    })
    return this.http.put<User>(environment.main_url+"/api/usuario/"+id, data, { headers } );
  }

  delete(id: any): Observable<User> {
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this._userService.getToken()
    })
    return this.http.delete<User>(environment.main_url+"/api/usuario/"+id, { headers });
  }
}
