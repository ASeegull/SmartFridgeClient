export class Login {
    name: string;
    password: string;
    constructor(obj?: any) {
        this.name = obj && obj.name;
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
