import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ModalModule } from 'ngx-modal';
import { MainService } from '../../services/main.service';
import { Agent } from '../../models/agent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // products: Agent[];
  products: Agent[] = [{
      agentID: '',
      product: 'Oil',
      weight: 300,
      stateExpires: '23.01.2018',
      condition: 'ok'
    },
    {
      agentID: '',
      product: 'Milk',
      weight: 1000,
      stateExpires: '10.01.2018',
      condition: 'warn'
    },
    {
      agentID: '',
      product: 'Milk',
      weight: 1000,
      stateExpires: '10.01.2018',
      condition: 'expired'
    }];

  noAgents = false;
  success = false;
  failed = false;

  constructor(
    public mainService: MainService,
    public router: Router
  ) { }

  ngOnInit() {
    this.mainService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
      if (this.products.length === 0) {
        this.noAgents = true;
      }
    });
  }

  searchByProduct() {
  }

  newAgentRedirect() {
    this.router.navigate(['/newAgent']);
  }

}
