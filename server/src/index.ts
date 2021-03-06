import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import { COOKIE_REDIS, __prod__ } from "./constants";
import { MyContext } from "./types";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import cors from "cors";
import { createConnection } from "typeorm";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import path from "path";
import { Updoot } from "./entities/Updoot";


declare module "express-session" {
  interface Session {
    userId: number;
  }
}

const main = async () => {
  const conn = createConnection({
    type: "postgres",
    database: "psql-reddit",
    username: "postgres",
    password: "postgres",
    migrations: [path.join(__dirname, "./migrations/*")],
    logging: true,
    synchronize: true,
    entities: [Post, User, Updoot],
  });

  (await conn).runMigrations();

  const app = express();

  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };

  app.use(cors(corsOptions));

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.use(
    session({
      name: COOKIE_REDIS,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
        logErrors: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        secure: __prod__, //cookie only works in https
        sameSite: "lax", //csrf
      },
      saveUninitialized: false,
      secret: "asd98d3hsadhkuahd9821hd",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({
      req,
      res,
      redis: redis,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log("server has started on localhost:4000");
  });
};

main().catch((err) => {
  console.log(err);
});
