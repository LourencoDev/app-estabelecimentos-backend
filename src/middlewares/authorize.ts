import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import constants from '../utilities/constants';
import { AuthService } from '../services/AuthService';
import { UserInterface } from '../interfaces/UserInterface';

export default class Authorize {
  public static async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      const { token } = req.body;

      const userToken = jwt.verify(token as string, constants.JWT.SECRET_KEY) as UserInterface;
      const user = await AuthService.getByEmail(userToken.email);

      if (!user) {
        return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Sem permissão' });
      }

      req.user = user;
      delete req.user.password;
      
      return next();
    } catch (err) {
      return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Sem permissão' });
    }
  }
}