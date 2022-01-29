import { createConnection } from 'typeorm';
import constants from './../utilities/constants';
import dbconfig from './dbconfig';

export default class Database {
  public static async connection() {
    try {
      const config = constants.IS_PROD ? dbconfig.OrmConfigProd : dbconfig.OrmConfigDev as any
      console.log(config);
      await createConnection(config);
      console.log('Conexão com o Banco de Dados estabelecida com sucesso!');
    } catch(err) {
      console.log(`Erro ao tentar se conectar com o Banco de Dados: ${err}`);
    }
  }
}