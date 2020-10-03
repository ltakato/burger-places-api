import * as path from "path";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const options: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'data/burger-places.db',
  logging: true,
  entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
  migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
}

module.exports = options;