import { Router } from 'express';
import {
  createStock,
  deleteStock,
  getStockCategories,
  getStocks,
  updateStock,
} from '../controllers/StockController';
import { validateToken } from '../controllers/AuthController';

const router = Router();

router
  .get('/getCategories', validateToken, getStockCategories)
  .get('/:userId', validateToken, getStocks)
  .post('/', validateToken, createStock)
  .put('/', validateToken, updateStock)
  .delete('/:stockId', validateToken, deleteStock);

export const StockRoute = router;
