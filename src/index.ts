import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();
  const post = orm.em.create(Post, { title: "Hello, first title!" });
  await orm.em.persistAndFlush(post);
  await orm.em.nativeInsert(Post, { title: "Hello, second title!" });
};

main().catch((err) => {
  console.log(err);
});
