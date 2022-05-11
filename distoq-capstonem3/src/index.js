import "@fontsource/itim"
import "@fontsource/nunito"
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { thema } from "./styles/GlobalStyles";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={thema}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
