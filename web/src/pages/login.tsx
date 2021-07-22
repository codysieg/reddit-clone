import React from "react";

import { Form, Formik } from "formik";
import { Box, Button } from "@chakra-ui/react";
import { Wrapper } from "./wrapper";
import InputField from "../components/InputField";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/dist/client/router";

export const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({
            username: values.username,
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
              label="Username"
              placeholder="username"
              name="username"
            ></InputField>
            <Box mt={4}>
              <InputField
                label="Password"
                placeholder="password"
                name="password"
                type="password"
              ></InputField>
            </Box>
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

export default Login;
