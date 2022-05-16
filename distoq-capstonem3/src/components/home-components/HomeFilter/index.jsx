import { Button, Flex } from "@chakra-ui/react";
import { useInputHome } from "../../../Providers/SearchHome";

const HomeFilter = () => {
  const { addInputSearch } = useInputHome();

  return (
    <Flex>
      <Button m={3} onClick={() => addInputSearch("sanduiches")}>
        lanches
      </Button>
      <Button m={3} onClick={() => addInputSearch("bebidas")}>
        bebidas
      </Button>
      <Button m={3} onClick={() => addInputSearch("porcoes")}>
        porções
      </Button>
      <Button m={3} onClick={() => addInputSearch("milkshake")}>
        milkshakes
      </Button>
    </Flex>
  );
};

export default HomeFilter;
