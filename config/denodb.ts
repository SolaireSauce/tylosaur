export const denodbConfig: DenodbConfig = {
  use: "PostgreSQL",

  connection: {
    database: "tylosaur",
    host: "127.0.0.1",
    username: "tylosaur",
    password: "secret",
    port: 5432,
  },
};

type DenodbConfig = {
  use: "MySQL" | "PostgreSQL" | "SQLite";
  connection: {
    database: string;
    host: string;
    username: string;
    password: string;
    port: number;
  };
};
