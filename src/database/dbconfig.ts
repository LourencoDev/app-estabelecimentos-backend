const OrmConfigProd = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  synchronize: true,
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
    entitiesDir: "../../dist/models",
    migrationsDir: "../../dist/database/migrations"
  }
}

const OrmConfigDev = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  synchronize: true,
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
    entitiesDir: "src/models",
    migrationsDir: "src/database/migrations"
  }
}

export default {
  OrmConfigProd,
  OrmConfigDev,
}