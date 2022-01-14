import { Router, Request, Response } from 'express';
import { AuthController } from '../controllers/AuthController';
import Authorize from '../middlewares/authorize';

const router = Router();
// router.post('/register', AuthController.register);
// router.post('/login', AuthController.login);
// router.post('/', Authorize.authenticate, AuthController.home);
router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'OK' });
});

export default router;