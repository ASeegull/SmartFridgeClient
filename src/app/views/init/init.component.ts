import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'Loading';
  }

  ngOnInit() {
  }

}
