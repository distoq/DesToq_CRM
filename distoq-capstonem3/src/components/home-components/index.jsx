import { useContext } from "react";
import { ShowcaseContext } from "../../Providers/showcase/";
import { CartContext } from "../../Providers/cart";

import {
  Flex,
  List,
  ListItem,
  Image,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

const CardSC = ({ product }) => {
  const { listProducts } = useContext(ShowcaseContext);
  const { cart, addCart } = useContext(CartContext);
  console.log("cart na Home page", cart);

  return (
    // <Flex
    //   direction={["column", "column", "row", "row", "row"]}
    //   wrap={["nowrap", "nowrap", "wrap", "wrap", "wrap"]}
    //   align={["center", "center", "center", "center", "center"]}
    //   justify={["center", "center", "center", "center", "center"]}
    // >
    <List
      w={["277px", "297px", "835px", "835px", "1125px"]}
      h="100%"
      // h="507px"
      mt="15px"
      mb="25px"
      display="flex"
      direction={["column", "column", "row", "row", "row"]}
      wrap={["nowrap", "nowrap", "wrap", "wrap", "wrap"]}
      align={["center", "center", "center", "center", "center"]}
      justify={["center", "center", "center", "center", "center"]}
      spacing={10}
    >
      {listProducts.map((product) => (
        <ListItem
          width="257px"
          h="507px"
          m="10px"
          border="1px solid #E5E5E5"
          borderRadius="10px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          key={product.id}
        >
          <Image
            w="257px"
            h="257px"
            src={product.image}
            alt={product.name}
            borderRadius="10px 10px 0px 0px"
          />
          <Stack spacing={3}>
            <Text fontSize="lg" align="center" pt="15px">
              {product.name}
            </Text>
            <Text fontSize="md" align="end" pr="10px">
              estrelas:{product.rating}
            </Text>
            <Text fontSize="lg" noOfLines={2} pl="10px">
              {product.description}
            </Text>
            <Text fontSize="lg" pl="10px">
              R$ {product.price}
            </Text>
          </Stack>
          <Flex justify="center">
            <Button
              variant="primary"
              w="247px"
              onClick={() => addCart(product) && toast.success("adicionado")}
            >
              COMPRAR
            </Button>
          </Flex>
        </ListItem>
      ))}
    </List>
  );
};

export default CardSC;
