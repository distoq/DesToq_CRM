import "@fontsource/itim";
import "@fontsource/nunito";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Providers from "./Providers";
import { BrowserRouter } from "react-router-dom";
import { thema } from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <ChakraProvider theme={thema}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);
