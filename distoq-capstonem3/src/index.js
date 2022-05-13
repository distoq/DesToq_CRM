import "@fontsource/itim";
import "@fontsource/nunito";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { thema } from "./styles/GlobalStyles";
import "@fontsource/itim"
import "@fontsource/nunito"
import { BrowserRouter } from "react-router-dom";
import Provider from "./Providers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
    <ToastContainer />
    <BrowserRouter>
      <ChakraProvider theme={thema}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
