import React from "react";

import { Form, Formik } from "formik";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { Wrapper } from "./wrapper";
import InputField from "../components/InputField";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/dist/client/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import NextLink from "next/link";

export const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({
            usernameOrEmail: values.usernameOrEmail,
            password: values.password,
          });
          console.log(response);
          if (response.data.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data.login.user) {
            //worked, we got a user back
            //navigate to landing page.
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="usernameOrEmail"
              label="Username or Email"
              placeholder="Username or Email"
            ></InputField>
            <Box mt={4}>
              <InputField
                label="Password"
                placeholder="password"
                name="password"
                type="password"
              ></InputField>
            </Box>
            <Flex mt={2}>
              <Box ml="auto">
                <NextLink href="/forgot-password">
                  <Link>Forgot Password</Link>
                </NextLink>
              </Box>
            </Flex>

            <Button
              backgroundColor="teal"
              mt={4}
              isLoading={isSubmitting}
              type="submit"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
