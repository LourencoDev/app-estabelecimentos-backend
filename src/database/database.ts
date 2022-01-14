import { createConnection } from 'typeorm';

export default class Database {
  public static async connection() {
    try {
      await createConnection();
      console.log('Conexão com o Banco de Dados estabelecida com sucesso!');
    } catch(err) {
      console.log(`Erro ao tentar se conectar com o Banco de Dados: ${err}`);
    }
  }
}