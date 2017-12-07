import { Component } from '@angular/core';
import { Login } from '../../../models/auth';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  creds: Login;

  constructor(public authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.creds);
  }

}
