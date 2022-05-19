import { Button, Flex } from "@chakra-ui/react";
import { useInputHome } from "../../../Providers/SearchHome";

const HomeFilter = () => {
  const { addInputSearch } = useInputHome();

  return (
    <Flex
      overflowX={"auto"}
      maxH={"400px"}
      flexWrap={"wrap"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Button
        variant={"primary"}
        m={["1", "1", "1", "1", "3"]}
        w={["80px", "80px", "80px", "80px", "100px"]}
        onClick={() => addInputSearch("")}
      >
        Todos
      </Button>
      <Button
        variant={"primary"}
        m={["1", "1", "1", "1", "3"]}
        w={["80px", "80px", "80px", "80px", "100px"]}
        onClick={() => addInputSearch("sanduiches")}
      >
        Lanches
      </Button>
      <Button
        variant={"primary"}
        m={["1", "1", "1", "1", "3"]}
        w={["80px", "80px", "80px", "80px", "100px"]}
        onClick={() => addInputSearch("bebidas")}
      >
        Bebidas
      </Button>
      <Button
        variant={"primary"}
        m={["1", "1", "1", "1", "3"]}
        w={["80px", "80px", "80px", "80px", "100px"]}
        onClick={() => addInputSearch("porcoes")}
      >
        Porções
      </Button>
      <Button
        variant={"primary"}
        m={["1", "1", "1", "1", "3"]}
        w={["90px", "90px", "90px", "90px", "110px"]}
        onClick={() => addInputSearch("milkshake")}
      >
        Milkshakes
      </Button>
    </Flex>
  );
};

export default HomeFilter;
