import { ConnectionOptions } from "typeorm";

export const database = {
  default: <ConnectionOptions>{
    type: "postgres",
    host: process.env.DB_HOST || "database",
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || "app",
    password: process.env.DB_PASS || "app",
    database: process.env.DB_NAME || "app",
    dropSchema: false,
    synchronize: true,
    entities: ["src/models/**/*.ts"],
  },
  testing: <ConnectionOptions>{
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    synchronize: true,
    entities: ["src/models/**/*.ts"],
  },
};
