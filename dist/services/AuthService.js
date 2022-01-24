"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _AppError = require('./../utilities/errors/AppError');
var _AuthRepository = require('./../repositories/AuthRepository');
var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _httpstatus = require('http-status'); var _httpstatus2 = _interopRequireDefault(_httpstatus);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _constants = require('../utilities/constants'); var _constants2 = _interopRequireDefault(_constants);

 class AuthService {
   static async register(user) {
    const passwordHash = await _bcrypt2.default.hashSync(user.password, 10);

    user = {
      ...user,
      password: passwordHash
    }

    const response = await _AuthRepository.AuthRepository.register(user);
    return response;
  }

   static async login(user) {
    const userByEmail = await AuthService.getByEmail(user.email);

    const result = await _bcrypt2.default.compareSync(user.password, userByEmail.password);

    if (!result) {
      throw new (0, _AppError.AppError)(_httpstatus2.default.UNAUTHORIZED, 'Falha na autenticação');
    }

    const token = _jsonwebtoken2.default.sign({ email: user.email }, _constants2.default.JWT.SECRET_KEY, { expiresIn: '1h' });

    return { token };
  }

   static async getByEmail(email) {
    const user = await _AuthRepository.AuthRepository.selectOne({ email });

    if (!user) {
      throw new (0, _AppError.AppError)(_httpstatus2.default.NOT_FOUND, 'Usuário não encontrado!');
    }

    return user;
  }
} exports.AuthService = AuthService;