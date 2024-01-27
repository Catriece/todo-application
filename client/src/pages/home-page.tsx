import { Box, Button } from "@chakra-ui/react";
import React, { FC } from "react";
import LoginPage from "./authentication/login-page";

const HomePage: FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("It Works!");
  };

  return (
    <Box>
      <LoginPage />
    </Box>
  );
};

export default HomePage;
