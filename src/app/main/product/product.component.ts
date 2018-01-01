import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Agent } from '../../models/agent';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Agent;


  constructor(public mainService: MainService) { }
    ngOnInit() {
    console.log(this.product);
  }
}
