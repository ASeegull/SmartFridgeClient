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
    const body = JSON.stringify({login: creds.name, pass: creds.password});
    console.log(body);
    this.http
      .post(environment.apiURL + 'client/login', body, { observe: 'response', withCredentials: true })
      .subscribe(
        res => {
          console.log(res.headers);
          if (res.status === 200) {
            this.auth = true;
            this.router.navigate(['/home']);
          }
        },
        err => {
          console.log('Something went wrong!', err);
        }
      );
  }

  signup(user: User) {
    const body = JSON.stringify({login: user.name, pass: user.password});
    console.log(body);
    this.http
      .post(environment.apiURL + 'client/signup', body, { observe: 'response', withCredentials: true })
      .subscribe(
        (res) => {
          console.log(res);
          if (res.status === 200) {
            this.auth = true;
            this.router.navigate(['/home']);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  logout() {
      this.http
        .get(environment.apiURL + 'client/logout', { observe: 'response', withCredentials: true })
        .subscribe(
          res => {
            if (res.status === 200) {
              this.auth = false;
              this.router.navigate(['/signup']);
            }
          },
          err => {
            console.log(err);
          }
        );

        this.router.navigate(['/signup']);
    }
  }
