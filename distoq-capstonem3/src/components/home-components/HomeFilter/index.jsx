import { Button, Flex } from "@chakra-ui/react";
import { useInputHome } from "../../../Providers/SearchHome";

const HomeFilter = () => {
  const { addInputSearch } = useInputHome();

  return (
    <Flex>
      <Button m={3} onClick={() => addInputSearch("")}>
        Todos
      </Button>
      <Button m={3} onClick={() => addInputSearch("sanduiches")}>
        Lanches
      </Button>
      <Button m={3} onClick={() => addInputSearch("bebidas")}>
        Bebidas
      </Button>
      <Button m={3} onClick={() => addInputSearch("porcoes")}>
        Porções
      </Button>
      <Button m={3} onClick={() => addInputSearch("milkshake")}>
        Milkshakes
      </Button>
    </Flex>
  );
};

export default HomeFilter;
