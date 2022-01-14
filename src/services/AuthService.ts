import { AppError } from './../utilities/errors/AppError';
import { AuthRepository } from './../repositories/AuthRepository';
import bcrypt from 'bcrypt';
import { UserInterface } from '../interfaces/UserInterface';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import constants from '../utilities/constants';

export class AuthService {
  public static async register(user: UserInterface) {
    const passwordHash = await bcrypt.hashSync(user.password, 10);

    user = {
      ...user,
      password: passwordHash
    }

    const response = await AuthRepository.register(user);
    return response;
  }

  public static async login(user: UserInterface) {
    const userByEmail = await AuthService.getByEmail(user.email);

    const result = await bcrypt.compareSync(user.password, userByEmail.password);

    if (!result) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Falha na autenticação');
    }

    const token = jwt.sign({ email: user.email }, constants.JWT.SECRET_KEY, { expiresIn: '1h' });

    return { token };
  }

  public static async getByEmail(email: string) {
    const user = await AuthRepository.selectOne({ email });

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'Usuário não encontrado!');
    }

    return user;
  }
}