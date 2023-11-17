const FundamentusAPI = require('fundamentus-unofficial-api');
import { IStockIformation } from './interfaces/IStocksInformation';

export class FundamentusService implements IStockIformation {
  private stockObject: any = null;

  constructor(private refName: string) {
    this.refName = refName;
  }

  async getStockInformations() {
    this.stockObject = await FundamentusAPI.fetch(this.refName);
  }

  getEquityValuePerShare(): number {
    return this.stockObject.cotacao / this.stockObject.pPorVp;
  }
  getDividendYield(): number {
    return this.stockObject.divYield;
  }
  getFullName(): string {
    return this.stockObject.nome;
  }
  getRegularValue(): number {
    return this.stockObject.cotacao;
  }
}
