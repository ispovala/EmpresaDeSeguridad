import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Credential} from  'src/app/core/models/user/credential.model'
import { Router } from '@angular/router';

const baseUrl = environment.main_url + '/auth/login';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  private httpOptions: any;

  constructor(private http: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public login(user: Credential, next: string) {
    return new Promise((res, rej) => {
      this.http
        .post(baseUrl, user, this.httpOptions)
        .subscribe(
          (token: any) => {
            this.setData(token.token);
            res('Login Success!');
            if (localStorage.getItem('roles') != null && localStorage.getItem('roles') == 'superuser') {
              this.router.navigate([next+'admin/home']);
            } else
              this.router.navigate([next]);
          },
          (error: any) => {
            rej(error.error);
          }
        );
    });
  }

  private setData(token: string) {
    let payload = JSON.parse(window.atob(token.split('.')[1]));
    localStorage.setItem('token', token);
    localStorage.setItem('exp', payload.exp);
    localStorage.setItem('roles', payload.roles ? payload.roles : []);
  }

  public logout() {
    localStorage.removeItem('exp');
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
  }

  public isAuthenticated() {
    return localStorage.getItem('token') ? true : false;
  }

  public getToken(){
    return localStorage.getItem('token');
  }



}
