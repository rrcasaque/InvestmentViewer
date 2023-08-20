import { Router } from 'express';
import {
  createStock,
  getStockCategories,
  teste,
} from '../controllers/StockController';
import { validateToken } from '../controllers/AuthController';

const router = Router();

router
  .post('/', validateToken, createStock)
  .get('/', validateToken, getStockCategories);

export const StockRoute = router;
