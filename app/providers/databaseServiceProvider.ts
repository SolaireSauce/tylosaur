import { denodbConfig } from "../../config/denodb.ts";
import {
  Database,
  MySQLConnector,
  PostgresConnector,
  ServiceProvider,
  SQLite3Connector,
  MongoDBConnector
} from "../../deps.ts";
import models from "../models/index.ts";

export class DatabaseServiceProvider extends ServiceProvider {
  register(): void {
    //
  }

  boot(): void {
    let connection;
    switch (denodbConfig.default) {
      case "sqlite":
        connection = new SQLite3Connector(denodbConfig.connections.sqlite);
        break;
      case "mysql":
        connection = new MySQLConnector(denodbConfig.connections.mysql);
        break;
      case "pgsql":
        connection = new PostgresConnector(denodbConfig.connections.pgsql);
        break;
      case "mongodb":
        connection = new MongoDBConnector(denodbConfig.connections.mongodb);
        break;
      default:
        throw new Error("Please select a valid default database in your config/denodb.ts file");
    }

    const db = new Database(connection);

    db.link(models);

    db.sync({ drop: true }); // TODO: Remove this as soon as nessie is setup

    this.tylosaur.container.register("db", { useValue: db });
  }
}
