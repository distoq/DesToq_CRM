import { Button, Heading } from "@chakra-ui/react";

import LoginPage from "./pages/login";
import Register from "./pages/register";
import { Flex } from "@chakra-ui/react";
import Routers from "./routes";

function App() {
  return (
    <div className="App">
     <Routers/>
    </div>
  );
}

/* 
function App() {
  return (
    <Flex>
     <Register/>
    </Flex>
  );
}*/

export default App;
