import { Request, Response } from 'express';
import { HandleError } from '../services/HandleError';
import {
  StockType,
  UpdatedStockType,
  Validation,
} from '../services/Validation';
import { Stock } from '../models/Stock';
import { ECategory } from '../models/ECategory';
import { StockRepository } from '../repositories/StockRepository';
import { Error } from '../models/Error';
import { UserRepository } from '../repositories/UserRepository';
import { FundamentusService } from '../services/FundamentusService';

export const createStock = async (req: Request, res: Response) => {
  try {
    const { amount, buyValue, category, refName, userId, subCategory } =
      req.body as StockType;

    Validation.Stock.parse({
      amount: amount,
      buyValue: buyValue,
      category: category,
      refName: refName,
      subCategory: subCategory,
      userId: userId,
    });

    const user = await UserRepository.findFirst({ where: { id: userId } });

    if (!user) throw new Error('User not found', 404);

    const stockInfo = new FundamentusService(refName);

    await stockInfo.getStockInformations();

    if (!Object.keys(ECategory).includes(category))
      throw new Error('category not found', 404);
    const stock = new Stock(
      stockInfo.getFullName(),
      refName.toUpperCase(),
      stockInfo.getRegularValue(),
      stockInfo.getEquityValuePerShare(),
      buyValue,
      amount,
      stockInfo.getDividendYield(),
      ECategory[category as keyof typeof ECategory],
      1,
      subCategory
    );

    const newStock = await StockRepository.create({
      data: {
        amount: stock.getAmount(),
        buyValue: stock.getBuyValue(),
        category: stock.getCategory().toString(),
        currentValue: stock.getCurrentValue(),
        dividendYear: stock.getDividendYear(),
        fullName: stock.getFullName(),
        realValue: stock.getRealValue(),
        refName: stock.getRefName(),
        percentParticipation: stock.getPercentParticipation(),
        authorId: userId,
      },
    });

    return res.status(201).json({ newStock });
  } catch (error) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};

export const getStocks = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await UserRepository.findFirst({ where: { id: userId } });
    if (!user) throw new Error('User not found', 404);

    const stockList = await StockRepository.findMany({
      where: {
        authorId: userId,
      },
    });

    return res.status(200).json({ stockList });
  } catch (error) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};

export const getStockCategories = (req: Request, res: Response) => {
  res.status(200).json({ stockCategories: ECategory });
};

export const updateStock = async (req: Request, res: Response) => {
  try {
    const {
      amount,
      buyValue,
      category,
      refName,
      userId,
      subCategory,
      stockId,
    } = req.body as UpdatedStockType;
    Validation.UpdatedStock.parse({
      amount: amount,
      buyValue: buyValue,
      category: category,
      refName: refName,
      subCategory: subCategory,
      userId: userId,
      stockId: stockId,
    });

    const user = await UserRepository.findFirst({ where: { id: userId } });
    if (!user) throw new Error('User not found', 404);

    const stockInfo = new FundamentusService(refName);

    await stockInfo.getStockInformations();

    if (!Object.keys(ECategory).includes(category))
      throw new Error('category not found', 404);

    const stock = new Stock(
      stockInfo.getFullName(),
      refName.toUpperCase(),
      stockInfo.getRegularValue(),
      stockInfo.getEquityValuePerShare(),
      buyValue,
      amount,
      stockInfo.getDividendYield(),
      ECategory[category as keyof typeof ECategory],
      1,
      subCategory
    );

    const updatedStock = await StockRepository.update({
      where: {
        id: stockId,
      },
      data: {
        amount: stock.getAmount(),
        buyValue: stock.getBuyValue(),
        category: stock.getCategory().toString(),
        currentValue: stock.getCurrentValue(),
        dividendYear: stock.getDividendYear(),
        fullName: stock.getFullName(),
        realValue: stock.getRealValue(),
        refName: stock.getRefName(),
        authorId: userId,
      },
    });
    res.status(200).json({ message: 'updated stock successful' });
  } catch (error) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};

export const deleteStock = async (req: Request, res: Response) => {
  try {
    const { stockId } = req.params;

    if (!stockId) throw new Error('stockId property is required', 400);

    await StockRepository.delete({
      where: {
        id: stockId,
      },
    });

    return res.status(200).json({ message: 'deleted stock successful' });
  } catch (error) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};
