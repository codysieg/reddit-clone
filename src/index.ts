import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import { __prod__ } from "./constants";
import { MyContext } from "./types";
import cors from "cors";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

declare module "express-session" {
  interface Session {
    userId: number;
  }
}

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();

  const app = express();

  const corsOptions = {
    origin: "https://studio.apollographql.com",
    credentials: true,
  };

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.use(
    session({
      name: "qid-redis",
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
        logErrors: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        secure: true, //cookie only works in https
        sameSite: "none", //csrf
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
    context: ({ req, res }): MyContext => ({ em: orm.em, req, res }),
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        settings: {
          "request.credentials": "same-origin",
        },
      }),
    ],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: corsOptions,
  });

  app.listen(4000, () => {
    console.log("server has started on localhost:4000");
  });
};

main().catch((err) => {
  console.log(err);
});
