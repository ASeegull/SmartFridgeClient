import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Agent } from '../../models/agent';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent {
  agent: Agent = new Agent();
  success: boolean;
  failed: boolean;

  constructor(public mainService: MainService) {}

  onSubmit() {
    this.mainService.addAgent(this.agent)
        .subscribe(
          (res) => {
          console.log(res);
            if (res.status === 200) {
            console.log('Your agent is successfully registered');
            this.success = true;
        }
      },
      (err) => {
        console.log(err);
        this.failed = true;
      }
    );
  }
}
