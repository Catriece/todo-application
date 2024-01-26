import { Box, Button } from "@chakra-ui/react";
import React, { FC } from "react";

const HomePage: FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("It Works!");
  };

  return (
    <Box>
      <p>You have reached home page</p>
      <Button onClick={handleClick}>Click Me!</Button>
    </Box>
  );
};

export default HomePage;
