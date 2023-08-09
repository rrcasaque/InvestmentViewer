import { ECategory } from './ECategory';
import { Stock } from './Stock';
import { User } from './User';

export class Dashboard {
  constructor(
    private user: User,
    private stockWallet: Stock[],
    private paramFilter?: string,
    private categoryFilter?: ECategory
  ) {
    this.user = user;
    this.stockWallet = stockWallet;
    this.paramFilter = paramFilter;
    this.categoryFilter = categoryFilter;
  }
}
