import { Injectable } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Login, User } from '../models/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  auth = false;

  constructor(
    public router: Router,
    private http: HttpClient
  ) {}

  getCookies() {
    if (document.cookie) {
      this.auth = true;
    }

    console.log(document.cookie);
  }

  checkLogin(): boolean {
    return this.auth;
  }

  redirect() {
    (this.auth) ? this.router.navigate(['/home']) : this.router.navigate(['/signup']);
  }

  login(creds) {
    console.log(creds);
    this.http
      .post(environment.apiURL + 'client/login', creds)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log('Something went wrong!', err);
        }
      );
  }

  signup(user: User) {
    console.log(user);
    this.http
      .post(environment.apiURL + 'client/signup', user)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log('Something went wrong!', err);
        }
      );
  }

  logout() {
      this.http
        .get(environment.apiURL + 'client/logout')
        .subscribe(
          data => {
            console.log(data);
          },
          err => {
            console.log('Something went wrong!', err);
          }
        );

        this.router.navigate(['/signup']);
    }
  }
