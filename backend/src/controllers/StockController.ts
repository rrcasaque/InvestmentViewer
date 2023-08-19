import { Request, Response } from 'express';
import { HandleError } from '../services/HandleError';
import { StockType, Validation } from '../services/Validation';
import { Stock } from '../models/Stock';
import { ECategory } from '../models/ECategory';
import { StockRepository } from '../repositories/StockRepository';
import { Error } from '../models/Error';

export const createStock = async (req: Request, res: Response) => {
  try {
    const { amount, buyValue, category, refName, subCategory } =
      req.body as StockType;
    if (!Object.keys(ECategory).includes(category))
      throw new Error('category not found', 404);
    Validation.Stock.parse({
      amount: amount,
      buyValue: buyValue,
      category: category,
      refName: refName,
      subCategory: subCategory,
    });
    const stock = new Stock(
      'fullName',
      refName,
      111.11,
      100,
      buyValue,
      amount,
      0.091,
      ECategory[category as keyof typeof ECategory],
      1,
      'https://image.png',
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
      },
    });

    return res.status(201).json({ newStock });
  } catch (error) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};
