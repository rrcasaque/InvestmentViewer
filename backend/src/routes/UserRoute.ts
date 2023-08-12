import { Router } from 'express';
import { createUser, loginUser } from '../controllers/UserController';

const router = Router();

router.post('/register', createUser);

router.post('/login', loginUser);

export const UserRoute = router;
