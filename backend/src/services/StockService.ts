import { Stock } from '../models/Stock';

export class StockService {
  static getBalance(stockWallet: Stock[], newValue: number) {
    let totalPortfolioValue = stockWallet.reduce(
      (total, stock) => total + stock.getCurrentValue(),
      0
    );
    const availableValue = newValue - totalPortfolioValue;

    if (availableValue <= 0) {
      return [{ message: 'Aporte insuficiente' }];
    }

    const sortedStocks = [...stockWallet].sort(
      (a, b) => a.getPercentParticipation() - b.getPercentParticipation()
    );

    const balanceResult = [];

    for (const stock of sortedStocks) {
      const stockValue = stock.getCurrentValue();
      const targetValue =
        totalPortfolioValue +
        availableValue * (stock.getPercentParticipation() / 100);
      const quantityToBuy = Math.floor(
        (targetValue - totalPortfolioValue) / stockValue
      );

      if (quantityToBuy > 0) {
        balanceResult.push({
          stock: stock.getFullName(),
          quantityToBuy: quantityToBuy,
        });
        totalPortfolioValue += quantityToBuy * stockValue;
      }
    }

    return balanceResult.length > 0
      ? balanceResult
      : [{ message: 'Aporte insuficiente' }];
  }
}
