"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _establishimentRoutes = require('./routes/establishimentRoutes'); var _establishimentRoutes2 = _interopRequireDefault(_establishimentRoutes);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

 class App {
  
   __init() {this.PORT = process.env.PORT || 3000}

  constructor() {;App.prototype.__init.call(this);
    this.express = _express2.default.call(void 0, );
    this.middleware();
    this.routes();
    this.listen();
  }

   getApp() {
    return this.express;
  }

   middleware() {
    this.express.use(_express2.default.urlencoded({ extended: false }));
    this.express.use(_express2.default.json());
    this.express.use(_cors2.default.call(void 0, ));
  }

   routes() {
    this.express.use('/', _establishimentRoutes2.default);
  }

   listen() {
    this.express.listen(this.PORT, () => {
      console.log(`Servidor rodando na porta ${this.PORT}`);
    });
  }
} exports.App = App;