import { Router } from 'express';
import { getRecoveryCode } from '../controllers/AuthController';

const router = Router();

router.get('/recoveryCode', getRecoveryCode);

export const AuthRoute = router;
