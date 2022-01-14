"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _httpstatus = require('http-status'); var _httpstatus2 = _interopRequireDefault(_httpstatus);
var _constants = require('../utilities/constants'); var _constants2 = _interopRequireDefault(_constants);
var _AuthService = require('../services/AuthService');


 class Authorize {
   static async authenticate(req, res, next) {
    try {
      const { token } = req.body;

      const userToken = _jsonwebtoken2.default.verify(token , _constants2.default.JWT.SECRET_KEY) ;
      const user = await _AuthService.AuthService.getByEmail(userToken.email);

      if (!user) {
        return res.status(_httpstatus2.default.UNAUTHORIZED).json({ message: 'Sem permissão' });
      }

      req.user = user;
      delete req.user.password;
      
      return next();
    } catch (err) {
      return res.status(_httpstatus2.default.UNAUTHORIZED).json({ message: 'Sem permissão' });
    }
  }
} exports.default = Authorize;