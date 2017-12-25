export class Agent {
  agentID: string;
  product: string;
  weight: number;
  stateExpires: string;
  condition: string;

  constructor(obj?: any) {
    this.agentID = obj && obj.AgentID;
    this.product = obj && obj.Product;
    this.weight = obj && obj.Weight;
    this.stateExpires = obj && obj.StateExpires;
    this.condition = obj && obj.Condition;
  }
}
