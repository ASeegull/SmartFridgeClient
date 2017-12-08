import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})

export class InitComponent implements OnInit {
  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getCookies();
    this.authService.redirect();
  }
}
