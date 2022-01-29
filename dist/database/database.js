"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _typeorm = require('typeorm');
var _constants = require('./../utilities/constants'); var _constants2 = _interopRequireDefault(_constants);
var _dbconfig = require('./dbconfig'); var _dbconfig2 = _interopRequireDefault(_dbconfig);

 class Database {
   static async connection() {
    try {
      const config = _constants2.default.IS_PROD ? _dbconfig2.default.OrmConfigProd : _dbconfig2.default.OrmConfigDev 
      console.log(config);
      await _typeorm.createConnection.call(void 0, config);
      console.log('Conexão com o Banco de Dados estabelecida com sucesso!');
    } catch(err) {
      console.log(`Erro ao tentar se conectar com o Banco de Dados: ${err}`);
    }
  }
} exports.default = Database;