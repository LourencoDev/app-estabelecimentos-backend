import { UserInterface } from './interfaces/UserInterface';

declare global {
  namespace Express {
    interface Request {
      user?: UserInterface
    }
  }
}