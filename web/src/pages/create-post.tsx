import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Formik, Form } from "formik";
import React, { useEffect } from "react";
import InputField from "../components/InputField";
import { useCreatePostMutation, useMeQuery } from "../generated/graphql";
import Wrapper from "./wrapper";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { Layout } from "../components/Layout";
import { useIsAuth } from "../utils/useIsAuth";

const CreatePost: React.FC<{}> = ({}) => {
  const router = useRouter();
  useIsAuth();
  const [, createPost] = useCreatePostMutation();
  
  return (
    <Layout variant="small">
      <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={async (values) => {
          const { error } = await createPost({ input: values });
          if (!error) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="title"
              label="title"
              placeholder="title..."
            ></InputField>
            <Box mt={4}>
              <InputField
                textarea
                label="Body"
                placeholder="text..."
                name="text"
              ></InputField>
            </Box>

            <Button
              backgroundColor="teal"
              mt={4}
              isLoading={isSubmitting}
              type="submit"
            >
              Create Post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(CreatePost);
