import { Post } from "src/entities/Post";
import { MyContext } from "src/types";
import { Query, Resolver, Ctx } from "type-graphql";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }
}