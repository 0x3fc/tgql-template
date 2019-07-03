import { createConnection, Connection } from "typeorm";
import { config } from "../../src/config/config";

let connection: Connection;

beforeEach(async () => {
  if (connection === undefined) {
    connection = await createConnection(config.database.testing);
    return;
  }

  await connection.synchronize(true);
});
