export class Agent {
  agentID: string;
  product: string;
  weight: number;
  stateExpires: string;
  condition: string;
  imageURL: string;

  constructor(obj?: any) {
    this.agentID = obj && obj.agentID || null;
    this.product = obj && obj.product || null;
    this.weight = obj && Number(obj.weight) || null;
    this.stateExpires = obj && obj.stateExpires || null;
    this.condition = obj && obj.condition || null;
    this.imageURL = obj && obj.imageURL || null;
  }
}
