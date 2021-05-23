import { MySQLOptions,PostgresOptions, SQLite3Options, MongoDBOptions } from "../deps.ts";

export const denodbConfig: DenodbConfig = {
  default: "pgsql",

  connections: {
    sqlite: {
      filepath: "storage/db/db.sqlite"
    },
    mysql: {
      host: "127.0.0.1",
      port: 3306,
      database: "tylosaur",
      username: "tylosaur",
      password: "secret"
    },
    pgsql: {
      host: "127.0.0.1",
      port: 5432,
      database: "tylosaur",
      username: "tylosaur",
      password: "secret"
    },
    mongodb: {
     uri: "127.0.0.1",
     database: "tylosaur"
    }
  }
};

type DenodbConfig = {
  default: "sqlite" | "mysql" | "pgsql" | "mongodb";
  connections: {
    sqlite: SQLite3Options;
    mysql: MySQLOptions;
    pgsql: PostgresOptions;
    mongodb: MongoDBOptions
  };
};
