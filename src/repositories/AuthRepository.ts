import httpStatus from 'http-status';
import { getRepository, Repository } from 'typeorm';
import { AppError } from '../utilities/errors/AppError';
import { User } from './../models/User';

export class AuthRepository {  
  public static async register(auth: any) {
    const ormRepository: Repository<User> = getRepository(User);
    let response = null;

    try {
      response = await ormRepository.save(auth);
    } catch (err) {
      throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'INTERNAL_SERVER_ERROR');
    }

    return response;
  }

  public static async selectOne(options: any) {
    const ormRepository: Repository<User> = getRepository(User);
    let response = null;

    try {
      response = await ormRepository.findOne(options);
    } catch (err) {
      throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'INTERNAL_SERVER_ERROR');
    }

    return response;
  }
}