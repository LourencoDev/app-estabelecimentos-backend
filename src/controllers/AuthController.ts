import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { AuthService } from '../services/AuthService';
import { AuthControllerFilter } from './filters/AuthControllerFilter';

export class AuthController {
  public static async register(req: Request, res: Response): Promise<Response> {
    let response: any = null;

    try {
      const data = await AuthControllerFilter.registerFilter(req.body);
      response = await AuthService.register(data);
    } catch ({ statusCode, message }) {
      return res.status(statusCode as number).json({ message });
    }

    return res.status(httpStatus.OK).json(response);
  }

  public static async login(req: Request, res: Response): Promise<Response> {
    let response: any = null;

    try {
      const data = await AuthControllerFilter.registerFilter(req.body);
      response = await AuthService.login(data);
    } catch ({ statusCode, message }) {
      return res.status(statusCode as number).json({ message });
    }

    return res.status(httpStatus.OK).json(response);
  }
}