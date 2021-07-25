import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { withUrqlClient } from "next-urql";
import React from "react";
import { useState } from "react";
import InputField from "../components/InputField";
import { useForgotPasswordMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

import Wrapper from "./wrapper";

const ForgotPassword: React.FC = ({}) => {
  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await forgotPassword({
            email: values.email,
          });
          setComplete(true);
        }}
      >
        {({ isSubmitting }) =>
          complete ? (
            <Box>
              If an account with that email exists, we have sent you an email to
              reset your password.
            </Box>
          ) : (
            <Form>
              <InputField
                name="email"
                label="email"
                placeholder="email"
                type="email"
              ></InputField>

              <Button
                backgroundColor="teal"
                mt={4}
                isLoading={isSubmitting}
                type="submit"
              >
                Forgot Password
              </Button>
            </Form>
          )
        }
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);
