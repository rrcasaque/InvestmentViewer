export interface IStockIformation {
  getStockInformations(): void;
  getEquityValuePerShare(refName: string): number;
  getDividendYield(refName: string): number;
  getFullName(refName: string): string;
  getRegularValue(refName: string): number;
}
