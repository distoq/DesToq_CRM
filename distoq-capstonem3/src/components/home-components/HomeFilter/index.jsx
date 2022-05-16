import { Button, Flex } from "@chakra-ui/react";
import { useInputHome } from "../../../Providers/SearchHome";

const HomeFilter = () => {
  const { inputSearch, addInputSearch } = useInputHome();

  return (
    <Flex>
      <Button m={3} onClick={() => addInputSearch("sanduiches")}>
        Lanches
      </Button>
      <Button m={3} onClick={() => addInputSearch("bebidas")}>
        Bebidas
      </Button>
      <Button m={3} onClick={() => addInputSearch("porcoes")}>
        Porcoes
      </Button>
      <Button m={3} onClick={() => addInputSearch("milkshake")}>
        Milkshake
      </Button>
    </Flex>
  );
};

export default HomeFilter;
