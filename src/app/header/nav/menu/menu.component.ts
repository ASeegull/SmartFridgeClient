import { Component } from '@angular/core';
import { SlidebarService } from '../../../services/slidebar.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('slidebarState', [
      state('open', style({
        transform: 'translateX(0)'
      })),
      state('hidden',   style({
        transform: 'translateX(100%)'
      })),
      transition('inactive => active', animate('400ms ease-in-out')),
      transition('active => inactive', animate('400ms ease-in-out'))
    ])
  ]
})

export class MenuComponent {
  constructor(public slidebarService: SlidebarService) { }

  toggleMenu() {
    this.slidebarService.toggle();
  }
}
