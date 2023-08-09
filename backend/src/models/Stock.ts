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
    private image: string,
    private category: ECategory,
    private percentParticipation: number,
    private historicalPrice: StockPrice[]
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
    this.percentParticipation = percentParticipation;
  }
}
