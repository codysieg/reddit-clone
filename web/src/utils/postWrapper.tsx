import { Box, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const PostWrapper = ({ title, text, ...rest }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={8}>{text}</Text>
    </Box>
  );
};

export default PostWrapper;
