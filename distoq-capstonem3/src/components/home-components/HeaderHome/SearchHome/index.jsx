import { Box, Flex, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { useInputHome } from "../../../../Providers/SearchHome";

const Search = ({ value }) => {
  const { inputSearch, addInputSearch } = useInputHome();

  return (
    <Flex m="10" align="center" w="100%" maxW="400px">
      <Input
     
        variant="outline"
        value={inputSearch}
        type="email"
        placeholder="Digite sua pesquisa"
        borderColor="#101010"
        color="#101010"
        _placeholder={{ color: "#101010" }}
        onChange={(e)=> addInputSearch(e.target.value)}
      />
      <Box position="relative" right={"25px"}>
        <FiSearch color="#101010" />
      </Box>
    </Flex>
  );
};

export default Search;
