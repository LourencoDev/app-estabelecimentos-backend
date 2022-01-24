"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _database = require('./database/database'); var _database2 = _interopRequireDefault(_database);
var _authRoutes = require('./routes/authRoutes'); var _authRoutes2 = _interopRequireDefault(_authRoutes);
require('reflect-metadata');

 class App {
  
   __init() {this.PORT = process.env.PORT || 3000}

  constructor() {;App.prototype.__init.call(this);
    this.express = _express2.default.call(void 0, );
    this.database();
    this.middleware();
    this.routes();
    this.listen();
  }

   getApp() {
    return this.express;
  }

   database() {
    _database2.default.connection();
  }

   middleware() {
    this.express.use(_express2.default.urlencoded({ extended: false }));
    this.express.use(_express2.default.json());
  }

   routes() {
    this.express.use('/auth', _authRoutes2.default);
  }

   listen() {
    this.express.listen(this.PORT, () => {
      console.log(`Servidor rodando na porta ${this.PORT}`);
    });
  }
} exports.App = App;