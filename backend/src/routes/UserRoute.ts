import { Router } from 'express';
import {
  createUser,
  loginUser,
  recoveryPassword,
} from '../controllers/UserController';

const router = Router();

router.post('/register', createUser);

router.post('/login', loginUser);

router.patch('/recoveryPassword', recoveryPassword);

export const UserRoute = router;
