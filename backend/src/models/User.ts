import { Stock } from './Stock';

export class User {
  constructor(
    private name: string,
    private email: string,
    private password: string,
    private profileImage: string,
    private stockWallet: Stock[]
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.profileImage = profileImage;
    this.stockWallet = stockWallet;
  }
}
