import React, { FC } from "react";
import LoginForm from "../../components/forms/login-form";
import { Box, Grid } from "@chakra-ui/react";

const LoginPage: FC = () => {
  return (
    <Grid>
      <LoginForm />
    </Grid>
  );
};

export default LoginPage;
