import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import Authorize from '../middlewares/authorize';

const router = Router();
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/', Authorize.authenticate, AuthController.home);

export default router;