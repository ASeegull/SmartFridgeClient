import { Component } from '@angular/core';
import { User } from '../../models/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = new User();

  constructor(public authService: AuthService) { }

  onSubmit() {
    this.authService.signup(this.user);
  }

}
