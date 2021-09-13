import { IconButton } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";

interface PostWrapperProps {
  post: PostSnippetFragment;
}

const PostWrapper: React.FC<PostWrapperProps> = ({ post }) => {
  const [loadingState, setloadingState] = useState<
    "updoot-loading" | "downdoot-loading" | "not-loading"
  >("not-loading");
  const [, setVote] = useVoteMutation();
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Flex>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          mr={4}
        >
          <IconButton
            aria-label="Vote Updoot"
            isLoading={loadingState === "updoot-loading"}
            onClick={async () => {
              setloadingState("updoot-loading");
              await setVote({postId: post.id, value: 1});
              setloadingState("not-loading");
            }}
            icon={<ChevronUpIcon w={6} h={6} />}
          ></IconButton>
          {post.points}
          <IconButton
            aria-label="Vote Downdoot"
            isLoading={loadingState === "downdoot-loading"}
            onClick={async () => {
              setloadingState("downdoot-loading");
              await setVote({ postId: post.id, value: -1 });
              setloadingState("not-loading");
            }}
            icon={<ChevronDownIcon w={6} h={6} />}
          ></IconButton>
        </Flex>
        <Box>
          <Heading fontSize="xl">{post.title}</Heading>
          <Text>Posted by: {post.creator.username} </Text>
          <Text mt={8}>{post.textSnippet}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default PostWrapper;