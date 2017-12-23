import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { SlidebarService } from '../../../../services/slidebar.service';


@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {

  constructor(public authService: AuthService, public slidebarService: SlidebarService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.slidebarService.toggle();
  }

  logout() {
    this.authService.logout();
  }
}
