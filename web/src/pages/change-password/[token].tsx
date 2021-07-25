import { Box, Button, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { NextComponentType, NextPage } from "next";
import { PartialNextContext, withUrqlClient } from "next-urql";
import router, { useRouter } from "next/dist/client/router";
import React from "react";
import { useState } from "react";
import InputField from "../../components/InputField";
import { useChangePasswordMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { toErrorMap } from "../../utils/toErrorMap";
import Wrapper from "../wrapper";
import NextLink from "next/link";

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  const router = useRouter();
  const [, changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState("");
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ newPassword: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await changePassword({
            newPassword: values.newPassword,
            token: token,
          });
          if (response.data.changePassword.errors) {
            const errorMap = toErrorMap(response.data.changePassword.errors);
            if ("token" in errorMap) {
              setTokenError(errorMap.token);
            }
            setErrors(errorMap);
          } else if (response.data.changePassword.user) {
            //worked, we got a user back
            //navigate to landing page.
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="newPassword"
              label="New Password"
              placeholder="New Password"
              type="password"
            ></InputField>
            {tokenError ? (
              <Box>
                <Box color="red"> {tokenError}</Box>
                <NextLink href="/forgot-password">
                  <Link>Forgot Password</Link>
                </NextLink>
              </Box>
            ) : null}
            <Button
              backgroundColor="teal"
              mt={4}
              isLoading={isSubmitting}
              type="submit"
            >
              Reset Password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

//@ts-ignore
export default withUrqlClient(createUrqlClient)(ChangePassword);
