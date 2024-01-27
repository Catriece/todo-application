import React, { FC, useState } from "react";
import {
  Center,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  Stack,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
// import {
//   UserInterface,
//   UserCreationInterface,
//   FormProperties,
// } from "../../types";

const LoginForm: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [username, setUsername] = useState<string>(""); // or email
  const [password, setPassword] = useState<string>("");
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target: string = e.target.name;
    const value: string = e.target.value;
    target == "username"
      ? setUsername(value.toLowerCase())
      : setPassword(value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const credentials = {
      username: username,
      password: password,
    };
    console.log("User Credentials: ", credentials);
    // Create Axios Post Request

    try {
      const response = await axios.post(`http://localhost:3040/name`, {
        name: username,
      });
      console.log("Response received: ", response.data);
    } catch (err) {
      console.error("Error completing request", err);
    }

    setUsername("");
    setPassword("");
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <Center h="100dvh">
      <Stack spacing={6}>
        <Text fontSize="3xl" fontWeight={700} textAlign="center">
          Login
        </Text>

        <FormControl variant="floating">
          <Input
            onChange={handleInputChange}
            isInvalid={isInvalid}
            id="username"
            name="username"
            placeholder="Username or Email"
          />
          <FormLabel>Email or Username</FormLabel>
        </FormControl>
        <FormControl variant="floating">
          <InputGroup>
            <Input
              onChange={handleInputChange}
              isInvalid={isInvalid}
              id="password"
              name="Password"
              type={show ? "text" : "password"}
              placeholder="Password"
            />
            <FormLabel>Password</FormLabel>
            <InputRightElement>
              <Button onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button onClick={handleSubmit}>Login</Button>
      </Stack>
    </Center>
  );
};

export default LoginForm;
