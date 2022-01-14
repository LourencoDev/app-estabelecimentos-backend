"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _httpstatus = require('http-status'); var _httpstatus2 = _interopRequireDefault(_httpstatus);
var _typeorm = require('typeorm');
var _AppError = require('../utilities/errors/AppError');
var _User = require('./../models/User');

 class AuthRepository {  
   static async register(auth) {
    const ormRepository = _typeorm.getRepository.call(void 0, _User.User);
    let response = null;

    try {
      response = await ormRepository.save(auth);
    } catch (err) {
      throw new (0, _AppError.AppError)(_httpstatus2.default.INTERNAL_SERVER_ERROR, 'INTERNAL_SERVER_ERROR');
    }

    return response;
  }

   static async selectOne(options) {
    const ormRepository = _typeorm.getRepository.call(void 0, _User.User);
    let response = null;

    try {
      response = await ormRepository.findOne(options);
    } catch (err) {
      throw new (0, _AppError.AppError)(_httpstatus2.default.INTERNAL_SERVER_ERROR, 'INTERNAL_SERVER_ERROR');
    }

    return response;
  }
} exports.AuthRepository = AuthRepository;