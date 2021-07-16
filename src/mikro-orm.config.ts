import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  driver: PostgreSqlDriver,
  dbName: "psql-reddit",
  type: "postgresql",
  user: "postgres",
  password: "postgres",
  debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];