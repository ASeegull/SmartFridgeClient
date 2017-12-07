import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<app-nav></app-nav>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
