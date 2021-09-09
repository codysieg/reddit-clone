import { withUrqlClient } from "next-urql";
import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import NextLink from "next/link";
import { Link, Stack } from "@chakra-ui/layout";
import PostWrapper from "../utils/postWrapper";
import { Button, Flex, Heading } from "@chakra-ui/react";

const Index = () => {
  const [variables, setVariables] = useState({limit: 10, cursor: null as string | null})
  const [{ data, fetching }] = usePostsQuery({variables});

  let body = null;

  if (!fetching && !data) {
    return <div>You got no data at all. Check network tab.</div>;
  }

  if (data === undefined || (!data && fetching)) {
    body = <div>Loading...</div>;
  } else if (data) {
    body = data.posts.posts.map((post) => {
      return (
        <PostWrapper key={post.id} title={post.title} text={post.textSnippet} />
      );
    });
  }

  return (
    <Layout variant="regular">
      <Flex align="center">
        <Heading>LiReddit</Heading>
        <NextLink href="/create-post">
          <Link ml="auto">Create Post</Link>
        </NextLink>
      </Flex>
      <Stack spacing={8}>{body}</Stack>
      {data && data.posts.hasMore ? (
        <Flex>
          <Button onClick={() => setVariables({
            limit: variables.limit,
            cursor: data.posts.posts[data.posts.posts.length-1].createdAt
          })} m="auto" my={8}>
            Load More...
          </Button>
        </Flex>
      ) : null}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
