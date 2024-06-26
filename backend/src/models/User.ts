import { Stock } from './Stock';

export class User {
  constructor(
    private name: string,
    private email: string,
    private password: string,
    private investType: string,
    private profileImage?: string,
    private stockWallet?: Stock[]
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.investType = investType;
    this.profileImage = profileImage;
    this.stockWallet = stockWallet;
  }
  public getName() {
    return this.name;
  }
  public getEmail() {
    return this.email;
  }
  public getPassword() {
    return this.password;
  }
  public getProfileImage() {
    return this.profileImage;
  }
  public getStockWallet() {
    return this.stockWallet;
  }

  public getInvestType() {
    return this.investType;
  }
}
