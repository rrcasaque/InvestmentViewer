export class StockPrice {
  constructor(
    private price: number,
    private year: number,
    private month: number,
    private Absolutedividend: number,
    private Percentdividend: number,
    private Absolutebalance: number,
    private Percentbalance: number
  ) {
    this.price = price;
    this.year = year;
    this.month = month;
    this.Absolutedividend = Absolutedividend;
    this.Percentdividend = Percentdividend;
    this.Absolutebalance = Absolutebalance;
    this.Percentbalance = Percentbalance;
  }
}
