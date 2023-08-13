import { Router } from 'express';
import { createUser, loginUser } from '../controllers/UserController';
import { getRecoveryCode } from '../controllers/AuthController';

const router = Router();

router.post('/register', createUser);

router.post('/login', loginUser);

router.post('/getRecoveryCode', getRecoveryCode);

export const UserRoute = router;
