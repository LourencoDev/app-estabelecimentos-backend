"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _typeorm = require('typeorm');

 class Database {
   static async connection() {
    try {
      await _typeorm.createConnection.call(void 0, );
      console.log('Conexão com o Banco de Dados estabelecida com sucesso!');
    } catch(err) {
      console.log(`Erro ao tentar se conectar com o Banco de Dados: ${err}`);
    }
  }
} exports.default = Database;