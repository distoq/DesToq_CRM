import { useContext } from "react";
import { HeaderHome } from "../../components/home-components/HeaderHome";
import Search from "../../components/home-components/HeaderHome/SearchHome";
import { CartContext } from "../../Providers/cart";
import CardSC from "../../components/home-components";
import { Flex } from "@chakra-ui/react";
import HomeFilter from "../../components/home-components/HomeFilter";

const Home = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <Flex direction="column" justify="center" align="center" w="100vw">
        <HeaderHome />
        <HomeFilter />
        <Search />
        <CardSC />
      </Flex>
    </>
  );
};

export default Home;
