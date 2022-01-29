"use strict";Object.defineProperty(exports, "__esModule", {value: true});const OrmConfigProd = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "TigreDosDados20!",
  database: "app_estabelecimentos",
  entities: [
    "../../dist/models/*"
  ],
  migrations: [
    "../../dist/database/migrations/*"
  ],
  cli: {
    "entitiesDir": "../../dist/models",
    "migrationsDir": "../../dist/database/migrations"
  }
}

const OrmConfigDev = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "TigreDosDados20!",
  database: "app_estabelecimentos",
  entities: [
    "src/models/*"
  ],
  migrations: [
    "src/database/migrations/*"
  ],
  cli: {
    "entitiesDir": "src/models",
    "migrationsDir": "src/database/migrations"
  }
}

exports. default = {
  OrmConfigProd,
  OrmConfigDev,
}