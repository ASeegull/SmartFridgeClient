export class Login {
    emai: string;
    password: string;
    constructor(obj?: any) {
        this.emai = obj && obj.emai;
    }
  }

export class User {
    name: string;
    password: string;
    pwdconfirm: string;
    email: string;
    constructor(obj?: any) {
        this.name = obj && obj.name;
    }
}
