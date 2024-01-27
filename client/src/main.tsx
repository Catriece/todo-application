import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { ChakraProvider } from "@chakra-ui/react";
import { inputTheme } from "./themes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={inputTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
