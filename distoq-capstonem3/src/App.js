import { Button, Heading } from "@chakra-ui/react";
import Register from "./pages/register";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
     <Heading variant={"primary"}>Olá</Heading>
     <Button variant={"dashboard"}>Teste</Button>
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
