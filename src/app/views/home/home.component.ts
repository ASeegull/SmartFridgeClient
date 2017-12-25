import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MainService } from '../../services/main.service';
import { Agent } from '../../models/agent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Agent[];
  noAgents = false;
  constructor(
    public mainService: MainService,
    public router: Router
  ) { }

  ngOnInit() {
    this.mainService.getProducts().subscribe(data => {
      this.products = data;
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
