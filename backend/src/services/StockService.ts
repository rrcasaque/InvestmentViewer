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
  static groupByRefName(stockWallet: any) {
    const result: { [key: string]: any } = {};

    stockWallet.forEach((stock: any) => {
      if (!result[stock.refName]) {
        result[stock.refName] = {
          fullName: stock.fullName,
          refName: stock.refName,
          currentValue: stock.currentValue,
          realValue: stock.realValue,
          buyValueSum: 0,
          amountSum: 0,
          dividendYear: stock.dividendYear,
          category: stock.category,
        };
      }

      result[stock.refName].buyValueSum += stock.buyValue * stock.amount;
      result[stock.refName].amountSum += stock.amount;
    });

    return Object.values(result).map((stock) => ({
      fullName: stock.fullName,
      refName: stock.refName,
      currentValue: stock.currentValue,
      realValue: stock.realValue,
      buyValue: stock.buyValueSum / stock.amountSum,
      amount: stock.amountSum,
      dividendYear: stock.dividendYear,
      category: stock.category,
    }));
  }
}
