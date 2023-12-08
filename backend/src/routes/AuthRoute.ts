import { Router } from 'express';
import {
  getRecoveryCode,
  loginUser,
  registerUser,
  validateToken,
} from '../controllers/AuthController';

const router = Router();

router
  .post('/register', registerUser)
  .post('/login', loginUser)
  .get('/recoveryCode/:userEmail', getRecoveryCode)
  .get('/validateToken', validateToken);

export const AuthRoute = router;
