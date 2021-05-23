import { DenodbConfig, env } from "../deps.ts";

export const denodbConfig: DenodbConfig = {
  default: env("DB_CONNECTION", "pgsql"),

  connections: {
    sqlite: {
      filepath: "storage/db/db.sqlite",
    },
    mysql: {
      host: env("DB_HOST", "127.0.0.1"),
      port: +env("DB_PORT", 3306),
      database: env("DB_DATABASE", "tylosaur"),
      username: env("DB_USERNAME", "tylosaur"),
      password: env("DB_PASSWORD", "secret"),
    },
    pgsql: {
      host: env("DB_HOST", "127.0.0.1"),
      port: +env("DB_PORT", 5432),
      database: env("DB_DATABASE", "tylosaur"),
      username: env("DB_USERNAME", "tylosaur"),
      password: env("DB_PASSWORD", "secret"),
    },
    mongodb: {
      uri: env("DB_HOST", "127.0.0.1"),
      database: env("DB_DATABASE", "tylosaur"),
    },
  },
};
