import { Router } from 'express';
import { createStock } from '../controllers/StockController';
import { validateToken } from '../controllers/AuthController';

const router = Router();

router.post('/', validateToken, createStock);

export const StockRoute = router;
