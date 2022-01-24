"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _httpstatus = require('http-status'); var _httpstatus2 = _interopRequireDefault(_httpstatus);
var _AuthService = require('../services/AuthService');
var _AuthControllerFilter = require('./filters/AuthControllerFilter');

 class AuthController {
   static async register(req, res) {
    let response = null;

    try {
      const data = await _AuthControllerFilter.AuthControllerFilter.registerFilter(req.body);
      response = await _AuthService.AuthService.register(data);
    } catch ({ statusCode, message }) {
      return res.status(statusCode ).json({ message });
    }

    return res.status(_httpstatus2.default.OK).json(response);
  }

   static async login(req, res) {
    let response = null;

    try {
      const data = await _AuthControllerFilter.AuthControllerFilter.registerFilter(req.body);
      response = await _AuthService.AuthService.login(data);
    } catch ({ statusCode, message }) {
      return res.status(statusCode ).json({ message });
    }

    return res.status(_httpstatus2.default.OK).json(response);
  }

   static async home(req, res) {
    return res.status(_httpstatus2.default.OK).json({ message: 'adsdas' });
  }
} exports.AuthController = AuthController;