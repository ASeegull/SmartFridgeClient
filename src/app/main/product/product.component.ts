import { Component, Input, OnInit } from '@angular/core';
import { Agent } from '../../models/agent';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Agent;

  constructor() { }
    ngOnInit() {
    console.log(this.product);
  }

}
