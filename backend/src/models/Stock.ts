import { ECategory } from './ECategory';
import { StockPrice } from './StockPrice';

export class Stock {
  constructor(
    private fullName: string,
    private refName: string,
    private currentValue: number,
    private realValue: number,
    private buyValue: number,
    private amount: number,
    private dividendYear: number,
    private category: ECategory,
    private percentParticipation: number,
    private image?: string,
    private subCategory?: string,
    private historicalPrice?: StockPrice[]
  ) {
    this.fullName = fullName;
    this.refName = refName;
    this.currentValue = currentValue;
    this.realValue = realValue;
    this.buyValue = buyValue;
    this.amount = amount;
    this.dividendYear = dividendYear;
    this.image = image;
    this.category = category;
    this.subCategory = subCategory;
    this.percentParticipation = percentParticipation;
  }

  getFullName() {
    return this.fullName;
  }

  getRefName() {
    return this.refName;
  }

  getCurrentValue() {
    return this.currentValue;
  }

  getRealValue() {
    return this.realValue;
  }

  getBuyValue() {
    return this.buyValue;
  }

  getAmount() {
    return this.amount;
  }

  getDividendYear() {
    return this.dividendYear;
  }

  getCategory() {
    return this.category;
  }

  getPercentParticipation() {
    return this.percentParticipation;
  }

  getImage() {
    return this.image;
  }

  getSubCategory() {
    return this.subCategory;
  }

  getHistoricalPrice() {
    return this.historicalPrice;
  }
}
