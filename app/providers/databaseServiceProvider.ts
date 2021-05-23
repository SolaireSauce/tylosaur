import { denodbConfig } from "../../config/denodb.ts";
import {
  Database,
  MySQLConnector,
  PostgresConnector,
  ServiceProvider,
} from "../../deps.ts";
import models from "../models/index.ts";

export class DatabaseServiceProvider extends ServiceProvider {
  register(): void {
    //
  }

  boot(): void {
    let connection;
    switch (denodbConfig.use) {
      case "MySQL":
        connection = new MySQLConnector(denodbConfig.connection);
        break;
      case "PostgreSQL":
        connection = new PostgresConnector(denodbConfig.connection);
        break;
      default:
        throw new Error("Please select a valid database");
    }

    const db = new Database(connection);

    db.link(models);

    db.sync({ drop: true }); // TODO: Remove this as soon as nessie is setup

    this.tylosaur.container.register("db", { useValue: db });
  }
}
