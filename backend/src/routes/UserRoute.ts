import { Router } from 'express';
import { recoveryPassword, updateUser } from '../controllers/UserController';
import { validateToken } from '../controllers/AuthController';

const router = Router();

router
  .put('/', validateToken, updateUser)
  .patch('/recoveryPassword', recoveryPassword);

export const UserRoute = router;
