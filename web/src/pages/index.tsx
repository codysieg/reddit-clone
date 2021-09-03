import { withUrqlClient } from "next-urql";
import React from "react";
import { Layout } from "../components/Layout";
import NavBar from "../components/NavBar";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import NextLink from "next/link";
import { Link } from "@chakra-ui/layout";

const Index = () => {
  const [{ data }] = usePostsQuery();

  let body = null;

  if (data === undefined || !data) {
    body = <div>Loading...</div>;
  } else if (data) {
    body = data.posts.map((post) => {
      return <div key={post.id}>{post.title}</div>;
    });
  }

  return (
    <Layout variant="regular">
      <NextLink href="/create-post">
        <Link>Create Post</Link>
      </NextLink>
      <div>Hello World!</div>
      {body}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
