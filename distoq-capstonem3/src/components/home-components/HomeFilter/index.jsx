import { Button, Flex } from "@chakra-ui/react";
import { useInputHome } from "../../../Providers/SearchHome";

const HomeFilter = () => {
  const { addInputSearch } = useInputHome();

  return (
    <Flex 
      overflowX={"auto"}
      maxH={"400px"}
      flexWrap={"wrap"}

      >
      <Button variant={'primary'} m={3} w={"100px"} onClick={() => addInputSearch("")}>
        Todos
      </Button>
      <Button variant={'primary'} m={3} w={"100px"} onClick={() => addInputSearch("sanduiches")}>
        Lanches
      </Button>
      <Button variant={'primary'} m={3} w={"100px"} onClick={() => addInputSearch("bebidas")}>
        Bebidas
      </Button>
      <Button variant={'primary'} m={3} w={"100px"} onClick={() => addInputSearch("porcoes")}>
        Porções
      </Button>
      <Button variant={'primary'} m={3} w={"120px"} onClick={() => addInputSearch("milkshake")}>
        Milkshakes
      </Button>
    </Flex>
  );
};

export default HomeFilter;
