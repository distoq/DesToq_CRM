import { useContext } from "react";
import { HeaderHome } from "../../components/home-components/HeaderHome";
import Search from "../../components/home-components/HeaderHome/SearchHome";
import { CartContext } from "../../Providers/cart";
import CardSC from "../../components/home-components";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  const { cart } = useContext(CartContext)
  console.log("cart na Home page", cart)

  return (
    <>
      <Flex direction="column" justify="center" align="center" w="100vw">
        <HeaderHome />
        <Search />
        <CardSC />
      </Flex>
    </>
  );
};

export default Home;
