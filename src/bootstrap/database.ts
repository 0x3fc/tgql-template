import { createConnection } from "typeorm";
import { config } from "../config/config";

export const connectDb = () => {
  createConnection(config.database.default);
};
