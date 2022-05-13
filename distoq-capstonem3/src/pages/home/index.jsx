import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShowcaseContext } from "../../Providers/showcase/";
import { HeaderHome } from "../../components/home-components/HeaderHome";
import Search from "../../components/home-components/HeaderHome/SearchHome";
import { CartContext } from "../../Providers/cart";
import CardSC from "../../components/home-components";
import {
  Flex,
  Box,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Home = ({ product }) => {
  
  const navigate = useNavigate();
  const { listProducts } = useContext(ShowcaseContext);
  const { cart, addCart } = useContext(CartContext);
  console.log("cart na Home page", cart);

  return (
    <>
      <Flex direction="column" justify="center" align="center">
        <HeaderHome />
        <Search />
        <Heading w="100%" h="80px">
          <button onClick={() => navigate("/cart")}>CARRINHO</button>
        </Heading>
        <CardSC />
      </Flex>
    </>
  );
};

export default Home;
