import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  showLogin = false;
  showMenu = false;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    const authentificated = this.authService.checkLogin();
    (authentificated) ? (this.showMenu = true) : (this.showLogin = true);
  }
}
