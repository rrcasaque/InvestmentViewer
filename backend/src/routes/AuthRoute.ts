import { Router } from 'express';
import {
  getRecoveryCode,
  loginUser,
  registerUser,
} from '../controllers/AuthController';

const router = Router();

router
  .post('/register', registerUser)
  .post('/login', loginUser)
  .get('/recoveryCode', getRecoveryCode);

export const AuthRoute = router;
