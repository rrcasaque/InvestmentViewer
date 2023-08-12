import { Router } from 'express';
import { createUser } from '../controllers/UserController';

const router = Router();

router.post('/', createUser);

export const UserRoute = router;
